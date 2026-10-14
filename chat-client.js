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
    async ask(messages, signal) {
      if (!base) throw new Error('AI backend is not configured.');
      const response = await fetchImpl(`${base}/api/chat`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        credentials:'omit', body:JSON.stringify({messages}), signal
      });
      if (!response.ok) {
        const error = new Error('AI assistant unavailable.');
        error.reason = response.status === 429 ? 'rate_limited' : 'provider_unavailable';
        throw error;
      }
      const result = await response.json();
      if (!['ai','local'].includes(result?.mode) || typeof result.answer !== 'string' || !result.answer.trim() || result.answer.length > 12000) throw new Error('Invalid response.');
      return result;
    }
  };
}
