(function() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', current);
  toggle.checked = current === 'dark';
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
})();
