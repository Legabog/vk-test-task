function setDefaultTheme() {
  // default body's light-theme
  if (!localStorage.theme) localStorage.theme = "light-theme";
  document.body.className = localStorage.theme;
}

function setHandlersForThemeSwitcher() {
  // click handler for theme-switcher
  document.getElementById("theme-switcher").onclick = () => {
    if (localStorage.theme === "light-theme") {
      document.body.className = "dark-theme";
      localStorage.theme = "dark-theme";
    } else {
      document.body.className = "light-theme";
      localStorage.theme = "light-theme";
    }
  };
}

setDefaultTheme();
setHandlersForThemeSwitcher();
