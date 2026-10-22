const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Theme: follow the system until the visitor chooses; the choice is remembered when storage allows.
const themeButton = $('#theme-toggle');
const darkScheme = matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => document.documentElement.dataset.theme || (darkScheme.matches ? 'dark' : 'light');
function syncThemeButton() {
  themeButton.setAttribute('aria-label', currentTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
themeButton.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
  syncThemeButton();
});
darkScheme.addEventListener('change', syncThemeButton);
syncThemeButton();

// Header: hairline once the page scrolls, and a disclosure menu on small screens.
const header = $('.site-header');
const menuButton = $('#menu-toggle');
const markScrolled = () => header.classList.toggle('is-scrolled', scrollY > 8);
addEventListener('scroll', markScrolled, {passive: true});
markScrolled();
function setMenu(open) {
  header.classList.toggle('nav-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuButton.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
$$('#site-nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (header.classList.contains('nav-open') && !header.contains(event.target)) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('nav-open')) { setMenu(false); menuButton.focus(); }
});

// Mark the navigation link for the section in the middle of the viewport.
const navLinks = $$('#site-nav a[href^="#"]');
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-45% 0px -50% 0px'});
  ['about', ...navLinks.map(link => link.hash.slice(1)), 'education'].forEach(id => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
}

// Gentle reveal on scroll; removed afterwards so hover transitions behave normally.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const targets = $$('.section-head, .ask-panel, .project, .role, .pub, .tool-group, .degree');
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      reveal.unobserve(target);
      target.classList.add('is-visible');
      target.addEventListener('transitionend', () => {
        target.classList.remove('reveal', 'is-visible');
        target.style.transitionDelay = '';
      }, {once: true});
    });
  }, {rootMargin: '0px 0px -6% 0px', threshold: .06});
  targets.forEach(target => {
    const siblings = [...target.parentElement.children];
    target.style.transitionDelay = `${Math.min(siblings.indexOf(target) % 4, 3) * 70}ms`;
    target.classList.add('reveal');
    reveal.observe(target);
  });
}

// Publications: the three most recent are shown until the reader asks for the rest.
const pubsToggle = $('.pubs-toggle');
if (pubsToggle) {
  const researchBody = pubsToggle.closest('.research-body');
  const moreLabel = pubsToggle.textContent;
  pubsToggle.hidden = false;
  pubsToggle.addEventListener('click', () => {
    const expanded = researchBody.classList.toggle('is-expanded');
    pubsToggle.setAttribute('aria-expanded', String(expanded));
    pubsToggle.textContent = expanded ? 'Show fewer' : moreLabel;
    if (!expanded && pubsToggle.getBoundingClientRect().top < 0) pubsToggle.scrollIntoView({block: 'center'});
  });
}

// Before/after comparison: pointer drag anywhere on the image, or arrow keys on the slider.
function initCompare(root) {
  $$('.compare', root).forEach(compare => {
    const range = $('.compare-range', compare);
    let dragging = false;
    compare.interacted = false;
    const apply = () => compare.style.setProperty('--pos', `${range.value}%`);
    const fromPointer = x => {
      const bounds = compare.getBoundingClientRect();
      range.value = Math.round(Math.max(0, Math.min(100, (x - bounds.left) / bounds.width * 100)));
      apply();
    };
    range.addEventListener('input', () => { compare.interacted = true; apply(); });
    compare.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      dragging = true;
      compare.interacted = true;
      compare.setPointerCapture(event.pointerId);
      fromPointer(event.clientX);
      range.focus({preventScroll: true});
    });
    compare.addEventListener('pointermove', event => { if (dragging) fromPointer(event.clientX); });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => compare.addEventListener(type, () => { dragging = false; }));
    compare.addEventListener('click', event => event.stopPropagation());
    apply();
  });
}
initCompare(document);

// Hint that the PhD figure is interactive with one slow sweep when it first scrolls into view.
const featuredCompare = $('#work .compare');
if (featuredCompare && 'IntersectionObserver' in window && !reducedMotion.matches) {
  const sweepObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    sweepObserver.disconnect();
    const range = $('.compare-range', featuredCompare);
    const start = performance.now(), from = Number(range.value);
    const step = now => {
      if (featuredCompare.interacted) return;
      const t = Math.min(1, (now - start) / 2600);
      range.value = (from + Math.sin(t * Math.PI * 2) * 30 * (1 - t)).toFixed(1);
      featuredCompare.style.setProperty('--pos', `${range.value}%`);
      if (t < 1) requestAnimationFrame(step);
    };
    setTimeout(() => requestAnimationFrame(step), 400);
  }, {threshold: .55});
  sweepObserver.observe(featuredCompare);
}

// Case studies open in a side panel built from the <template> for each project.
const projectDialog = $('#project-dialog');
const projectDetail = $('#project-detail');
const projectCards = $$('.project[data-project]');
let projectOpener;

function openProject(id, opener) {
  const template = document.getElementById(`case-${id}`);
  if (!template) return;
  const index = projectCards.findIndex(card => card.dataset.project === id);
  projectDetail.replaceChildren(template.content.cloneNode(true));

  // Reuse the card's concept diagram so it follows the active theme.
  $$('[data-diagram]', projectDetail).forEach(figure => {
    const source = $(`.project[data-project="${figure.dataset.diagram}"] .diagram`);
    if (!source) return;
    const diagram = source.cloneNode(true);
    $$('[id]', diagram).forEach(node => { node.id += '-case'; });
    diagram.setAttribute('aria-labelledby', `${source.getAttribute('aria-labelledby')}-case`);
    figure.prepend(diagram);
  });
  initCompare(projectDetail);
  $$('[data-close]', projectDetail).forEach(link => link.addEventListener('click', () => projectDialog.close()));

  const next = projectCards[(index + 1) % projectCards.length];
  const nextNav = element('nav', 'case-next');
  nextNav.setAttribute('aria-label', 'More case studies');
  const nextButton = element('button', 'case-next-button');
  nextButton.type = 'button';
  nextButton.append(element('span', 'mono-caption', 'Next case study'), element('span', 'case-next-title', $('h3', next).textContent));
  nextButton.addEventListener('click', () => openProject(next.dataset.project, $('.project-open', next)));
  nextNav.append(nextButton);
  projectDetail.append(nextNav);

  $('#case-crumb').textContent = `Case study · ${String(index + 1).padStart(2, '0')} / ${String(projectCards.length).padStart(2, '0')}`;
  projectOpener = opener;
  document.body.classList.add('case-open');
  if (!projectDialog.open) projectDialog.showModal();
  projectDialog.scrollTop = 0;
  const title = $('#project-dialog-title', projectDetail);
  title.tabIndex = -1;
  title.focus({preventScroll: true});
}

projectCards.forEach(card => {
  const button = $('.project-open', card);
  button.addEventListener('click', event => { event.stopPropagation(); openProject(button.dataset.open, button); });
  card.addEventListener('click', event => {
    if (event.target.closest('a, button, input, .compare') || String(getSelection?.() || '').length) return;
    openProject(card.dataset.project, button);
  });
});
$('#project-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
  if (event.target !== projectDialog) return;
  const bounds = projectDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) projectDialog.close();
});
projectDialog.addEventListener('close', () => {
  document.body.classList.remove('case-open');
  projectOpener?.focus({preventScroll: true});
});

// The hero's Email link scrolls to Contact and reveals the address there.
$$('[data-show-email]').forEach(link => link.addEventListener('click', () => { $('#email-reveal').open = true; }));

// Ask about me: the configured AI backend first, with prepared answers as the fallback.
const input = $('#chat-input');
const messageLog = $('#chat-messages');
const chatClient = createChatClient({apiBase: window.ZOEY_CONFIG?.chatApiBase, pageHref: location.href});
let aiEnabled = chatClient.enabled, busy = false, controller, generation = 0;
let conversation = [];

function showConversation(visible) {
  messageLog.hidden = !visible;
  $('#chat-head').hidden = !visible;
  $('#chat-reset').hidden = !visible;
  $('#chat-send').setAttribute('aria-expanded', String(visible));
}
showConversation(false);

function showMode(ai, fallback = false, reason = '') {
  $('#chat-mode').textContent = ai ? 'AI assistant' : 'Profile Q&A';
  $('.chat-status').classList.toggle('is-ai', ai);
  // AI answers need no note; a prepared answer says why it replaced the AI.
  const note = $('#chat-disclosure');
  note.textContent = ai
    ? ''
    : fallback ? (reason === 'rate_limited' ? 'The AI assistant has reached its usage limit, so this is a prepared answer. Please try again later.' : 'The AI assistant is unavailable right now, so this is a prepared answer.') : 'Prepared answers from Zoey’s profile and publications.';
  note.hidden = !note.textContent;
}
// Try the configured backend on every question: a cold start or a transient failure
// must not disable AI for the rest of the visit. Nothing is stored in the browser.
showMode(aiEnabled);

function addMessage(role, text, source, waiting = false, mode = '') {
  const message = element('div', `message ${role}${waiting ? ' waiting' : ''}`);
  if (role === 'assistant') {
    const badge = element('span', 'assistant-icon');
    badge.setAttribute('role', 'img');
    badge.setAttribute('aria-label', waiting ? 'Assistant is thinking' : 'Portfolio assistant');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (const [name, value] of Object.entries({viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false'})) svg.setAttribute(name, value);
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#icon-bot');
    svg.append(use);
    badge.append(svg);
    message.append(badge);
  }
  if (mode === 'local') message.append(element('span', 'message-kind', 'Prepared answer'));
  message.append(element('p', '', text));
  addSource(message, source);
  messageLog.append(message);
  messageLog.scrollTop = messageLog.scrollHeight;
  return message;
}

function addSource(message, source) {
  if (!source || !allowedSources.includes(source)) return;
  const link = element('a', 'message-source', source.startsWith('https:') ? 'Read the publication' : 'See it on the page');
  link.href = source;
  if (source.startsWith('https:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  message.append(link);
}

// Keeps the newest text in view while an answer streams in, unless the visitor scrolled up to read.
function followStream(wasAtBottom) {
  if (wasAtBottom) messageLog.scrollTop = messageLog.scrollHeight;
}
const atBottom = () => messageLog.scrollHeight - messageLog.scrollTop - messageLog.clientHeight < 40;

function setBusy(value) {
  busy = value;
  $('#chat-send').disabled = value;
  input.readOnly = value;
  $$('#suggested-questions button').forEach(button => { button.disabled = value; });
  $('#chat-form').setAttribute('aria-busy', String(value));
}

async function submitQuestion(question) {
  const text = question.trim().slice(0, 1200);
  if (!text || busy) return;
  const requestGeneration = generation;
  input.value = '';
  input.style.height = '';
  showConversation(true);
  addMessage('user', text);
  conversation.push({role: 'user', content: text});
  conversation = conversation.slice(-9);
  setBusy(true);
  const waiting = addMessage('assistant', 'Looking through Zoey’s profile…', null, true);
  const requestController = new AbortController();
  controller = requestController;
  // The first piece may wait for a sleeping free backend; after that, a long pause means the stream stalled.
  let timer = setTimeout(() => requestController.abort(), chatClient.timeoutMs);
  const wakeTimer = aiEnabled ? setTimeout(() => {
    if (requestGeneration === generation) waiting.querySelector('p').textContent = 'The assistant is taking a little longer to connect. Thanks for waiting…';
  }, 8000) : null;
  let streaming = null;
  const onDelta = answer => {
    if (requestGeneration !== generation) return;
    clearTimeout(timer);
    timer = setTimeout(() => requestController.abort(), 30000);
    if (!streaming) {
      clearTimeout(wakeTimer);
      waiting.remove();
      streaming = addMessage('assistant', '');
      streaming.classList.add('streaming');
      // Screen readers announce the finished answer once instead of every piece.
      messageLog.setAttribute('aria-busy', 'true');
    }
    const follow = atBottom();
    streaming.querySelector('p').textContent = answer.trimStart();
    followStream(follow);
  };
  let result;
  try {
    if (aiEnabled) {
      result = await chatClient.ask(conversation, {signal: requestController.signal, onDelta});
      if (requestGeneration !== generation) return;
      showMode(result.mode === 'ai', result.mode !== 'ai', result.reason);
    } else {
      result = answerLocally(text, conversation);
      showMode(false);
    }
  } catch (error) {
    if (requestGeneration !== generation) return;
    result = answerLocally(text, conversation);
    showMode(false, true, error.reason);
  } finally {
    clearTimeout(timer);
    clearTimeout(wakeTimer);
  }
  if (requestGeneration !== generation) return;
  waiting.remove();
  // Older backends may return an outdated prepared answer; use the bundled
  // knowledge for every local fallback and keep its mode explicit.
  if (result.mode === 'local') result = {...result, ...answerLocally(text, conversation)};
  if (streaming && result.mode === 'ai') {
    const follow = atBottom();
    streaming.classList.remove('streaming');
    streaming.querySelector('p').textContent = result.answer;
    addSource(streaming, result.source);
    followStream(follow);
  } else {
    // A prepared answer replaces a partial stream from a provider that failed midway.
    streaming?.remove();
    addMessage('assistant', result.answer, result.source, false, result.mode);
  }
  messageLog.removeAttribute('aria-busy');
  conversation.push({role: 'assistant', content: result.answer.slice(0, 1200)});
  setBusy(false);
  input.focus({preventScroll: true});
}

$('#chat-form').addEventListener('submit', event => { event.preventDefault(); submitQuestion(input.value); });
input.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); submitQuestion(input.value); }
});
input.addEventListener('input', () => { input.style.height = 'auto'; input.style.height = `${Math.min(input.scrollHeight, 120)}px`; });
$$('[data-question]').forEach(button => button.addEventListener('click', () => submitQuestion(button.dataset.question)));
$('#chat-reset').addEventListener('click', () => {
  generation++;
  controller?.abort();
  conversation = [];
  messageLog.replaceChildren();
  messageLog.removeAttribute('aria-busy');
  showConversation(false);
  input.value = '';
  input.style.height = '';
  showMode(aiEnabled);
  setBusy(false);
  input.focus({preventScroll: true});
});
