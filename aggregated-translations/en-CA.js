'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Begin modal dialog",
  "Terra.AbstractModal.EndModalDialog": "End modal dialog",
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximize",
  "Terra.actionHeader.minimize": "Minimize",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.alert.advisory": "Advisory.",
  "Terra.alert.alert": "Alert.",
  "Terra.alert.dismiss": "Dismiss",
  "Terra.alert.error": "Error.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Success.",
  "Terra.alert.unsatisfied": "Required Action.",
  "Terra.alert.unverified": "Outside Records.",
  "Terra.alert.warning": "Warning.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigation Items",
  "Terra.applicationNavigation.drawerMenu.utilities": "Utility Items",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Skip to Content",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Options",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "User Settings",
  "Terra.applicationNavigation.notifications.new": "New",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "More Navigation",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "More",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "More Navigation",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilities",
  "Terra.applicationNavigation.utilityMenu.help": "Help",
  "Terra.applicationNavigation.utilityMenu.logout": "Logout",
  "Terra.applicationNavigation.utilityMenu.settings": "Settings",
  "Terra.devSite.themed.help": "Help",
  "Terra.form.field.optional": "(optional)",
  "Terra.form.select.add": "Add \"{text}\"",
  "Terra.form.select.ariaLabel": "Search",
  "Terra.form.select.clearSelect": "Clear select",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.defaultUsageGuidance": "Use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.dimmed": "Dimmed.",
  "Terra.form.select.disabled": "Disabled.",
  "Terra.form.select.listOfTotalOptions": "List of {total} options.",
  "Terra.form.select.maxSelectionHelp": "Limit {text} items.",
  "Terra.form.select.maxSelectionOption": "Maximum number of {text} items selected",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Tap to navigate to options.",
  "Terra.form.select.mobileUsageGuidance": "Swipe right to navigate to options.",
  "Terra.form.select.multiSelectUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select or unselect an option.",
  "Terra.form.select.noResults": "No matching results for \"{text}\"",
  "Terra.form.select.optGroup": "Group {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.selectCleared": "Select value cleared",
  "Terra.form.select.selected": "Selected.",
  "Terra.form.select.selectedText": "{text} Selected.",
  "Terra.form.select.unselected": "Unselected.",
  "Terra.form.select.unselectedText": "{text} Unselected.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon",
  "Terra.InfiniteList.loading": "Loading...",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close",
  "Terra.notification.dialog.alert": "Alert",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Information",
  "Terra.notification.dialog.success": "Success",
  "Terra.notification.dialog.warning": "Warning",
  "Terra.Overlay.loading": "Loading...",
  "Terra.popup.header.close": "Close",
  "Terra.searchField.clear": "Clear",
  "Terra.searchField.search": "Search",
  "Terra.searchField.submit-search": "Submit Search",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "No Results",
  "Terra.status-view.no-matching-results": "No Matching Results",
  "Terra.status-view.not-authorized": "Not Authorized",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Don't Save",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "There are unsaved changes made to the following:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continue Editing",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "There are unsaved changes made to {promptDescription}. Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.title": "There are unsaved changes."
};
var areTranslationsLoaded = true;
var locale = 'en-CA';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
