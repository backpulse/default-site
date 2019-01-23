export const getLanguage = () => {
    const navigatorLang = navigator.language.substr(0, 2);
    let lang = localStorage.getItem("language") || navigatorLang;
    if (lang !== "fr" && lang !== "en") {
        lang = "en";
    }
    return lang;
}

export const getContent = translations => {
    let content = "";
    translations.forEach(t => {
        if(t.language_code === getLanguage()) {
            content = t.content;
        };
    });
    if(!content && translations.length > 0) {
        content = translations[0].content;
    }
    return content;
}