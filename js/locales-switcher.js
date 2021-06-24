function setHandlersForLocalesSwitcher() {
  const switchLanguage = (language) => {
    localStorage.language = language;
    setTextToComponents();
  };

  // Input
  const input = document.getElementById("language-switcher");
  if (localStorage.language === "ru") input.checked = false;
  if (localStorage.language === "en") input.checked = true;
  // change input handler
  document.getElementById("language-switcher").onchange = () => {
    if (localStorage.language === "en") {
      switchLanguage("ru");
    } else {
      switchLanguage("en");
    }
  };

  // Ru switcher
  // click on ru language switcher
  document.getElementById("language-switcher_ru").onclick = () => {
    if (localStorage.language !== "ru") {
      switchLanguage("ru");
      input.checked = false;
    }
  };

  // En switcher
  // click on en language switcher
  document.getElementById("language-switcher_en").onclick = () => {
    if (localStorage.language !== "en") {
      switchLanguage("en");
      input.checked = true;
    }
  };
}

setHandlersForLocalesSwitcher();
