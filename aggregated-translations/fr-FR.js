'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Commencer le dialogue modal",
  "Terra.AbstractModal.EndModalDialog": "Terminer le dialogue modal",
  "Terra.actionHeader.back": "Retour",
  "Terra.actionHeader.close": "Fermer",
  "Terra.actionHeader.maximize": "Agrandir",
  "Terra.actionHeader.minimize": "Réduire",
  "Terra.actionHeader.next": "Suivant",
  "Terra.actionHeader.previous": "Précédent",
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.alert.advisory": "Recommandation.",
  "Terra.alert.alert": "Alerte.",
  "Terra.alert.dismiss": "Ignorer",
  "Terra.alert.error": "Erreur.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Opération réussie.",
  "Terra.alert.unsatisfied": "Action requise.",
  "Terra.alert.unverified": "Dossiers extérieurs.",
  "Terra.alert.warning": "Avertissement.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Éléments de navigation",
  "Terra.applicationNavigation.drawerMenu.utilities": "Éléments de l'utilitaire",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Accéder au contenu",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Options",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Paramètres utilisateur",
  "Terra.applicationNavigation.notifications.new": "Nouveau",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Liens de navigation supplémentaires",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Plus",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Liens de navigation supplémentaires",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilitaires",
  "Terra.applicationNavigation.utilityMenu.help": "Aide",
  "Terra.applicationNavigation.utilityMenu.logout": "Déconnexion",
  "Terra.applicationNavigation.utilityMenu.settings": "Paramètres",
  "Terra.devSite.themed.help": "Aide",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.select.add": "Ajouter \"{text}\"",
  "Terra.form.select.ariaLabel": "Rechercher",
  "Terra.form.select.clearSelect": "Effacer la sélection",
  "Terra.form.select.defaultDisplay": "Sélectionner",
  "Terra.form.select.defaultUsageGuidance": "Utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.",
  "Terra.form.select.dimmed": "Grisé.",
  "Terra.form.select.disabled": "Désactivé.",
  "Terra.form.select.listOfTotalOptions": "Liste de {total} options.",
  "Terra.form.select.maxSelectionHelp": "Limite de {text} éléments",
  "Terra.form.select.maxSelectionOption": "{text} éléments maximum sélectionnés",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Appuyez pour naviguer vers les options.",
  "Terra.form.select.mobileUsageGuidance": "Balayez vers la droite pour naviguer vers les options.",
  "Terra.form.select.multiSelectUsageGuidance": "Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner ou désélectionner une option.",
  "Terra.form.select.noResults": "Aucun résultat correspondant pour \"{text}\"",
  "Terra.form.select.optGroup": "Groupe {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.",
  "Terra.form.select.selectCleared": "Valeur sélectionnée effacée.",
  "Terra.form.select.selected": "Sélectionné.",
  "Terra.form.select.selectedText": "{text} sélectionné.",
  "Terra.form.select.unselected": "Désélectionné.",
  "Terra.form.select.unselectedText": "{text} désélectionné.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icône Instructions électroniques pour l'utilisation",
  "Terra.InfiniteList.loading": "Chargement...",
  "Terra.menu.back": "Retour",
  "Terra.menu.close": "Fermer",
  "Terra.notification.dialog.alert": "Alerte",
  "Terra.notification.dialog.error": "Erreur",
  "Terra.notification.dialog.info": "Information",
  "Terra.notification.dialog.success": "Réussite",
  "Terra.notification.dialog.warning": "Avertissement",
  "Terra.Overlay.loading": "Chargement...",
  "Terra.popup.header.close": "Fermer",
  "Terra.searchField.clear": "Effacer",
  "Terra.searchField.search": "Rechercher",
  "Terra.searchField.submit-search": "Soumettre la recherche",
  "Terra.status-view.error": "Erreur",
  "Terra.status-view.no-data": "Aucun résultat",
  "Terra.status-view.no-matching-results": "Aucun résultat correspondant",
  "Terra.status-view.not-authorized": "Non autorisé",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Ne pas enregistrer",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Certaines modifications apportées aux éléments suivants n'ont pas été enregistrées:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Si vous n'enregistrez pas vos modifications, elles seront perdues. Comment voulez-vous procéder?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Poursuivre la modification",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Certaines modifications apportées à {promptDescription} n'ont pas été enregistrées. Si vous n'enregistrez pas vos modifications, elles seront perdues. Comment voulez-vous procéder?",
  "terraApplication.unsavedChangesPrompt.title": "Certaines modifications n'ont pas été enregistrées."
};
var areTranslationsLoaded = true;
var locale = 'fr-FR';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
