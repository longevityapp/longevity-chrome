// newtab.js
(async function () {
    // Fetch and parse the tips file
    const res = await fetch('assets/tips.json');
    const tips = await res.json();
  
    // Pick one tip per day, keyed by YYYY-MM-DD
    const todayKey = new Date().toISOString().slice(0, 10);
    const index = hashCode(todayKey) % tips.length;
    const tip = tips[index];
  
    // Populate the DOM
    set('#tip-title',   tip.title);
    set('#tip-snippet', tip.snippet);
    set('#tip-details', tip.details);
  
    // Expand/collapse logic
    const details = document.querySelector('#details');
    const toggle  = document.querySelector('#toggle');
    toggle.addEventListener('click', () => {
      details.classList.toggle('hidden');
      toggle.textContent = details.classList.contains('hidden') ? 'See more' : 'Show less';
    });
  
    /* ---- helpers ---- */
    function set(selector, text) {
      const el = document.querySelector(selector);
      el.textContent = text;
    }
    function hashCode(str) {
      return Array.from(str)
        .reduce((s,c) => Math.imul(31, s) + c.charCodeAt(0) >>> 0, 0);
    }
  })();