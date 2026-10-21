export function resolveChatApiBase(configuredBase, pageHref) {
  const page = new URL(pageHref);
  if (page.protocol === 'file:') return '';
  const isLocal = url => ['localhost','127.0.0.1','[::1]'].includes(url.hostname);
  if (!configuredBase?.trim()) return isLocal(page) ? page.origin : '';
  try {
    const base = new URL(configuredBase.trim());
    if (base.username || base.password || base.search || base.hash || base.pathname !== '/') return '';
    if (base.protocol !== 'https:' && !(page.protocol === 'http:' && isLocal(page) && base.protocol === 'http:' && isLocal(base))) return '';
    return base.origin;
  } catch { return ''; }
}

export function createChatClient({apiBase='', pageHref, fetchImpl=fetch} = {}) {
  const base = resolveChatApiBase(apiBase,pageHref);
  return {
    enabled: Boolean(base),
    // Allow time for a free backend to wake up before the model's own timeout.
    timeoutMs: base && new URL(base).origin !== new URL(pageHref).origin ? 90000 : 25000,
    // Streams the answer: onDelta receives the text so far each time a piece arrives.
    async ask(messages, {signal, onDelta} = {}) {
      if (!base) throw new Error('AI backend is not configured.');
      const response = await fetchImpl(`${base}/api/chat`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        credentials:'omit', body:JSON.stringify({messages, stream:true}), signal
      });
      if (!response.ok) {
        const error = new Error('AI assistant unavailable.');
        error.reason = response.status === 429 ? 'rate_limited' : 'provider_unavailable';
        throw error;
      }
      // A backend without streaming answers with a single JSON object.
      if (!(response.headers.get('content-type') || '').startsWith('text/event-stream')) return checkedResult(await response.json());
      let answer = '', done = null;
      await readChatEvents(response.body, event => {
        if (event?.type === 'delta' && typeof event.text === 'string') {
          answer += event.text;
          if (answer.length > 12000) throw new Error('Invalid response.');
          onDelta?.(answer);
        } else if (event?.type === 'done') {
          done = event;
          return true;
        }
      });
      if (!done) throw new Error('The answer stopped early.');
      // A prepared answer replaces anything streamed before the provider failed.
      return checkedResult(done.mode === 'ai' ? {mode:'ai', answer:answer.trim(), source:done.source} : done);
    }
  };
}

function checkedResult(result) {
  if (!['ai','local'].includes(result?.mode) || typeof result.answer !== 'string' || !result.answer.trim() || result.answer.length > 12000) throw new Error('Invalid response.');
  return {mode:result.mode, answer:result.answer, source:result.source, reason:result.reason};
}

// Reads "data: {json}" server-sent events until onEvent returns true or the stream ends.
async function readChatEvents(body, onEvent) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  try {
    while (true) {
      const {value, done} = await reader.read();
      buffer += decoder.decode(value, {stream:!done});
      const blocks = buffer.split('\n\n');
      buffer = done ? '' : blocks.pop();
      for (const block of blocks) {
        const data = block.split('\n').filter(line => line.startsWith('data:')).map(line => line.slice(5).trim()).join('');
        if (data && onEvent(JSON.parse(data))) return;
      }
      if (done) return;
    }
  } finally {
    reader.cancel().catch(() => {});
  }
}
