import {
    getLanguage
} from 'utils';

const strings = {
    "fr": {
        "MENU_HOME": "Accueil",
        "MENU_GALLERIES": "Galeries",
        "MENU_ABOUT": "À propos",
        "MENU_CONTACT": "Contact"
    },
    "en": {
        "MENU_HOME": "Home",
        "MENU_GALLERIES": "Galleries",
        "MENU_ABOUT": "About",
        "MENU_CONTACT": "Contact"

    }
}

export default strings[getLanguage()];