'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _nl = require('react-intl/locale-data/nl');

var _nl2 = _interopRequireDefault(_nl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_nl2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Begin de modale dialoog",
  "Terra.AbstractModal.EndModalDialog": "Modale dialoog beëindigen",
  "Terra.actionHeader.back": "Terug",
  "Terra.actionHeader.close": "Sluiten",
  "Terra.actionHeader.maximize": "Maximalisatie",
  "Terra.actionHeader.minimize": "Minimaliseren",
  "Terra.actionHeader.next": "Volgende",
  "Terra.actionHeader.previous": "Vorige",
  "Terra.ajax.error": "Deze inhoud kon niet worden geladen.",
  "Terra.alert.advisory": "Adviserend.",
  "Terra.alert.alert": "Waarschuwing.",
  "Terra.alert.dismiss": "Negeren",
  "Terra.alert.error": "Fout.",
  "Terra.alert.info": "Informatie.",
  "Terra.alert.success": "Succes.",
  "Terra.alert.unsatisfied": "Vereiste actie.",
  "Terra.alert.unverified": "Externe records.",
  "Terra.alert.warning": "Waarschuwing.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigatie-items",
  "Terra.applicationNavigation.drawerMenu.utilities": "Hulp-items",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Doorgaan naar content",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Opties",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Gebruikersinstellingen",
  "Terra.applicationNavigation.notifications.new": "Nieuw",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Meer navigatie",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Meer",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Meer navigatie",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Hulpprogramma's",
  "Terra.applicationNavigation.utilityMenu.help": "Help",
  "Terra.applicationNavigation.utilityMenu.logout": "Afmelden",
  "Terra.applicationNavigation.utilityMenu.settings": "Instellingen",
  "Terra.devSite.themed.help": "Help",
  "Terra.form.field.optional": "(optioneel)",
  "Terra.form.select.add": "\"{text}\" toevoegen",
  "Terra.form.select.ariaLabel": "Zoeken",
  "Terra.form.select.clearSelect": "Selectie wissen",
  "Terra.form.select.defaultDisplay": "- Selecteren -",
  "Terra.form.select.defaultUsageGuidance": "Gebruik de knoppen Pijl-omhoog en Pijl-omlaag om de opties te bekijken. Druk op Enter om een optie te selecteren.",
  "Terra.form.select.dimmed": "Gedimd.",
  "Terra.form.select.disabled": "Gedeactiveerd.",
  "Terra.form.select.listOfTotalOptions": "Lijst van {total} opties.",
  "Terra.form.select.maxSelectionHelp": "Limiet: {text} items.",
  "Terra.form.select.maxSelectionOption": "Maximumaantal van {text} items geselecteerd",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Tik om naar opties te gaan.",
  "Terra.form.select.mobileUsageGuidance": "Veeg naar rechts om naar opties te gaan.",
  "Terra.form.select.multiSelectUsageGuidance": "Voer tekst in of gebruik de knoppen Pijl-omhoog en Pijl-omlaag om de opties te bekijken. Druk op Enter om een optie te selecteren of te deselecteren.",
  "Terra.form.select.noResults": "Geen resultaten gevonden voor \"{text}\"",
  "Terra.form.select.optGroup": "Groeperen {text}",
  "Terra.form.select.option": "Opties",
  "Terra.form.select.searchUsageGuidance": "Voer tekst in of gebruik de knoppen Pijl-omhoog en Pijl-omlaag om de opties te bekijken. Druk op Enter om een optie te selecteren.",
  "Terra.form.select.selectCleared": "Geselecteerde waarde gewist",
  "Terra.form.select.selected": "Geselecteerd.",
  "Terra.form.select.selectedText": "{text} geselecteerd",
  "Terra.form.select.unselected": "Gedeselecteerd.",
  "Terra.form.select.unselectedText": "{text} niet geselecteerd.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Pictogram Elektronische gebruiksaanwijzing",
  "Terra.InfiniteList.loading": "Bezig met laden",
  "Terra.menu.back": "Terug",
  "Terra.menu.close": "Sluiten",
  "Terra.notification.dialog.alert": "Waarschuwing",
  "Terra.notification.dialog.error": "Fout",
  "Terra.notification.dialog.info": "Informatie",
  "Terra.notification.dialog.success": "Succes",
  "Terra.notification.dialog.warning": "Waarschuwing",
  "Terra.Overlay.loading": "Bezig met laden",
  "Terra.popup.header.close": "Sluiten",
  "Terra.searchField.clear": "Wissen",
  "Terra.searchField.search": "Zoeken",
  "Terra.searchField.submit-search": "Zoeken",
  "Terra.status-view.error": "Fout",
  "Terra.status-view.no-data": "Geen resultaten",
  "Terra.status-view.no-matching-results": "Geen overeenkomende resultaten",
  "Terra.status-view.not-authorized": "Niet geautoriseerd",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Niet opslaan",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Er zijn niet-opgeslagen wijzigingen in het volgende:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "De wijzigingen gaan verloren als u ze niet opslaat. Hoe wilt u doorgaan?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Doorgaan met bewerken",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Er zijn niet-opgeslagen wijzigingen in {promptDescription}. De wijzigingen gaan verloren als u ze niet opslaat. Hoe wilt u doorgaan?",
  "terraApplication.unsavedChangesPrompt.title": "Er zijn niet-opgeslagen wijzigingen."
};
var areTranslationsLoaded = true;
var locale = 'nl-BE';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
