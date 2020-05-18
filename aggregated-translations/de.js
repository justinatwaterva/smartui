'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Modaldialog starten",
  "Terra.AbstractModal.EndModalDialog": "Beenden Sie den modalen Dialog",
  "Terra.actionHeader.back": "Zurück",
  "Terra.actionHeader.close": "Schließen",
  "Terra.actionHeader.maximize": "Maximieren",
  "Terra.actionHeader.minimize": "Minimieren",
  "Terra.actionHeader.next": "Nächste",
  "Terra.actionHeader.previous": "Vorherige",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.alert.advisory": "Hinweis.",
  "Terra.alert.alert": "Warnung.",
  "Terra.alert.dismiss": "Verwerfen",
  "Terra.alert.error": "Fehler.",
  "Terra.alert.info": "Informationen.",
  "Terra.alert.success": "Erfolg.",
  "Terra.alert.unsatisfied": "Erforderliche Aktion.",
  "Terra.alert.unverified": "Externe Datensätze",
  "Terra.alert.warning": "Achtung.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigationselemente",
  "Terra.applicationNavigation.drawerMenu.utilities": "Dienstprogrammelemente",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menü",
  "Terra.applicationNavigation.header.skipToContentTitle": "Zum Inhalt",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Optionen",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Benutzereinstellungen",
  "Terra.applicationNavigation.notifications.new": "Neu",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Mehr Navigation",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Mehr",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Mehr Navigation",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Dienstprogramme",
  "Terra.applicationNavigation.utilityMenu.help": "Hilfe",
  "Terra.applicationNavigation.utilityMenu.logout": "Abmelden",
  "Terra.applicationNavigation.utilityMenu.settings": "Einstellungen",
  "Terra.devSite.themed.help": "Hilfe",
  "Terra.form.field.optional": "(wahlweise)",
  "Terra.form.select.add": "\"{text}\" hinzufügen",
  "Terra.form.select.ariaLabel": "Suchen",
  "Terra.form.select.clearSelect": "Ausgewählte entfernen",
  "Terra.form.select.defaultDisplay": "- Auswählen -",
  "Terra.form.select.defaultUsageGuidance": "Verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen.",
  "Terra.form.select.dimmed": "Gedimmt",
  "Terra.form.select.disabled": "Deaktiviert",
  "Terra.form.select.listOfTotalOptions": "Liste von {total} Optionen",
  "Terra.form.select.maxSelectionHelp": "{text} Elemente begrenzen.",
  "Terra.form.select.maxSelectionOption": "Maximale Anzahl an ausgewählten {text} Elementen",
  "Terra.form.select.menu": "Menü",
  "Terra.form.select.mobileButtonUsageGuidance": "Klicken, um zu Optionen zu navigieren",
  "Terra.form.select.mobileUsageGuidance": "Nach rechts wischen, um zu Optionen zu navigieren",
  "Terra.form.select.multiSelectUsageGuidance": "Geben Sie Text ein oder verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen oder die Auswahl aufzuheben.",
  "Terra.form.select.noResults": "Keine Übereinstimmungen für \"{text}\"",
  "Terra.form.select.optGroup": "Gruppe {text}",
  "Terra.form.select.option": "Optionen",
  "Terra.form.select.searchUsageGuidance": "Geben Sie Text ein oder verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen.",
  "Terra.form.select.selectCleared": "Ausgewählter Wert wurde entfernt",
  "Terra.form.select.selected": "Ausgewählt",
  "Terra.form.select.selectedText": "Ausgewählt: {text}",
  "Terra.form.select.unselected": "Nicht ausgewählt",
  "Terra.form.select.unselectedText": "{text} nicht ausgewählt",
  "Terra.icon.IconConsultInstructionsForUse.title": "Symbol 'Elektronische Gebrauchsanweisung'",
  "Terra.InfiniteList.loading": "Ladevorgang...",
  "Terra.menu.back": "Zurück",
  "Terra.menu.close": "Schließen",
  "Terra.notification.dialog.alert": "Benachrichtigung",
  "Terra.notification.dialog.error": "Fehler",
  "Terra.notification.dialog.info": "Informationen",
  "Terra.notification.dialog.success": "Erfolgreich",
  "Terra.notification.dialog.warning": "Warnung",
  "Terra.Overlay.loading": "Ladevorgang...",
  "Terra.popup.header.close": "Schließen",
  "Terra.searchField.clear": "Entfernen",
  "Terra.searchField.search": "Suchen",
  "Terra.searchField.submit-search": "Suche eingeben",
  "Terra.status-view.error": "Fehler",
  "Terra.status-view.no-data": "Keine Ergebnisse",
  "Terra.status-view.no-matching-results": "Keine Übereinstimmungen",
  "Terra.status-view.not-authorized": "Nicht autorisiert",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Nicht speichern",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Die Änderungen des folgenden Elements wurden nicht gespeichert:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Wenn Sie Ihre Änderungen nicht speichern, gehen diese verloren. Wie möchten Sie fortfahren?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Mit der Bearbeitung fortfahren",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Die Änderungen des Elements {promptDescription} wurden nicht gespeichert. Wenn Sie Ihre Änderungen nicht speichern, gehen diese verloren. Wie möchten Sie fortfahren?",
  "terraApplication.unsavedChangesPrompt.title": "Es liegen nicht gespeicherte Änderungen vor."
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
