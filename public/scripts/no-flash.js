// IIFE - To avoid flash of default theme: light
(function () {
  try {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const darkMode = localStorage.getItem('darkMode');
      if (darkMode === null || JSON.parse(darkMode)) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch (e) {
    // Fail silently - default to light theme
  }
})();
