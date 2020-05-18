'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _sv = require('react-intl/locale-data/sv');

var _sv2 = _interopRequireDefault(_sv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_sv2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Börja modal dialog",
  "Terra.AbstractModal.EndModalDialog": "Avsluta modal dialog",
  "Terra.actionHeader.back": "Tillbaka",
  "Terra.actionHeader.close": "Stäng",
  "Terra.actionHeader.maximize": "Maximera",
  "Terra.actionHeader.minimize": "Minimera",
  "Terra.actionHeader.next": "Nästa",
  "Terra.actionHeader.previous": "Föregående",
  "Terra.ajax.error": "Innehållet lästes inte in.",
  "Terra.alert.advisory": "Rådgivning.",
  "Terra.alert.alert": "Avisering.",
  "Terra.alert.dismiss": "Ignorera",
  "Terra.alert.error": "Fel.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Klar.",
  "Terra.alert.unsatisfied": "Nödvändig åtgärd krävs.",
  "Terra.alert.unverified": "Externa journaler.",
  "Terra.alert.warning": "Varning!",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigeringsobjekt",
  "Terra.applicationNavigation.drawerMenu.utilities": "Verktygsobjekt",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Meny",
  "Terra.applicationNavigation.header.skipToContentTitle": "Gå till Innehåll",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Alternativ",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Användarinställningar",
  "Terra.applicationNavigation.notifications.new": "Nytt",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Fler navigeringslänkar",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Mer",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Fler navigeringslänkar",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Verktyg",
  "Terra.applicationNavigation.utilityMenu.help": "Hjälp",
  "Terra.applicationNavigation.utilityMenu.logout": "Utloggning",
  "Terra.applicationNavigation.utilityMenu.settings": "Inställningar",
  "Terra.devSite.themed.help": "Hjälp",
  "Terra.form.field.optional": "(valfri)",
  "Terra.form.select.add": "Lägg till \"{text}\"",
  "Terra.form.select.ariaLabel": "Sök",
  "Terra.form.select.clearSelect": "Ta bort markering",
  "Terra.form.select.defaultDisplay": "- Välj -",
  "Terra.form.select.defaultUsageGuidance": "Använd upp- och nedpilarna för att navigera mellan alternativen. Tryck på Enter för att väklja ett alternativ.",
  "Terra.form.select.dimmed": "Inaktiverad.",
  "Terra.form.select.disabled": "Inaktiverad.",
  "Terra.form.select.listOfTotalOptions": "Lista med {total} alternativ.",
  "Terra.form.select.maxSelectionHelp": "Begränsa {text} antal poster.",
  "Terra.form.select.maxSelectionOption": "Max antal poster {text} är valda",
  "Terra.form.select.menu": "Meny",
  "Terra.form.select.mobileButtonUsageGuidance": "Tryck för att navigera till alternativen.",
  "Terra.form.select.mobileUsageGuidance": "Bläddra åt höger för att navigera till alternativen.",
  "Terra.form.select.multiSelectUsageGuidance": "Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att markera eller avmarkera ett alternativ.",
  "Terra.form.select.noResults": "Inga matchande resultat för \"{text}\"",
  "Terra.form.select.optGroup": "Grupp {text}",
  "Terra.form.select.option": "Alternativ",
  "Terra.form.select.searchUsageGuidance": "Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att välja ett alternativ.",
  "Terra.form.select.selectCleared": "Välj omarkerat värde",
  "Terra.form.select.selected": "Vald.",
  "Terra.form.select.selectedText": "{text} vald.",
  "Terra.form.select.unselected": "Omarkerad.",
  "Terra.form.select.unselectedText": "{text} avmarkerad.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Indikator för elektroniska bruksanvisningar (eIFU)",
  "Terra.InfiniteList.loading": "Läser in ...",
  "Terra.menu.back": "Tillbaka",
  "Terra.menu.close": "Stäng",
  "Terra.notification.dialog.alert": "Avisering",
  "Terra.notification.dialog.error": "Fel",
  "Terra.notification.dialog.info": "Information",
  "Terra.notification.dialog.success": "Klar",
  "Terra.notification.dialog.warning": "Varning",
  "Terra.Overlay.loading": "Läser in ...",
  "Terra.popup.header.close": "Stäng",
  "Terra.searchField.clear": "Rensa",
  "Terra.searchField.search": "Sök",
  "Terra.searchField.submit-search": "Sök",
  "Terra.status-view.error": "Fel",
  "Terra.status-view.no-data": "Inga resultat",
  "Terra.status-view.no-matching-results": "Inga resultat matchar sökvillkoren",
  "Terra.status-view.not-authorized": "Behörighet saknas",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Spara inte",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Det finns osparade ändringar i:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Om du inte sparar ändringarna så försvinner de. Hur vill du fortsätta?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Fortsätt redigera",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Det finns osparade ändringar i {promptDescription}. Om du inte sparar ändringarna så försvinner de. Hur vill du fortsätta?",
  "terraApplication.unsavedChangesPrompt.title": "Det finns osparade ändringar."
};
var areTranslationsLoaded = true;
var locale = 'sv';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
