'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Comenzar el diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Finalizar el diálogo modal",
  "Terra.actionHeader.back": "Retroceder",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.alert.advisory": "Recomendación.",
  "Terra.alert.alert": "Alerta.",
  "Terra.alert.dismiss": "Descartar",
  "Terra.alert.error": "Error.",
  "Terra.alert.info": "Información.",
  "Terra.alert.success": "Correcto.",
  "Terra.alert.unsatisfied": "Acción obligatoria.",
  "Terra.alert.unverified": "Historias clínicas externas.",
  "Terra.alert.warning": "Advertencia.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Elementos de navegación",
  "Terra.applicationNavigation.drawerMenu.utilities": "Elementos de utilidades",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Elementos adicionales",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Elementos adicionales",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menú",
  "Terra.applicationNavigation.header.skipToContentTitle": "Saltar al contenido",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Opciones",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Configuración de usuario",
  "Terra.applicationNavigation.notifications.new": "Nuevo",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Más opciones de navegación",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Más",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Más opciones de navegación",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilidades",
  "Terra.applicationNavigation.utilityMenu.help": "Ayuda",
  "Terra.applicationNavigation.utilityMenu.logout": "Cerrar sesión",
  "Terra.applicationNavigation.utilityMenu.settings": "Configuración",
  "Terra.devSite.themed.help": "Ayuda",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.add": "Agregar \"{text}\"",
  "Terra.form.select.ariaLabel": "Buscar",
  "Terra.form.select.clearSelect": "Borrar selección",
  "Terra.form.select.defaultDisplay": "- Seleccionar -",
  "Terra.form.select.defaultUsageGuidance": "Use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.dimmed": "Atenuado.",
  "Terra.form.select.disabled": "Deshabilitado.",
  "Terra.form.select.listOfTotalOptions": "Lista de {total} opciones.",
  "Terra.form.select.maxSelectionHelp": "Limite los elementos {text}.",
  "Terra.form.select.maxSelectionOption": "Número máximo de elementos {text} seleccionados",
  "Terra.form.select.menu": "Menú",
  "Terra.form.select.mobileButtonUsageGuidance": "Pulse para acceder a las opciones.",
  "Terra.form.select.mobileUsageGuidance": "Deslice a la derecha para acceder a las opciones.",
  "Terra.form.select.multiSelectUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar o deseleccionar una opción.",
  "Terra.form.select.noResults": "No se encontró ningún resultado que coincida para \"{text}\"",
  "Terra.form.select.optGroup": "Grupo {text}",
  "Terra.form.select.option": "Opciones",
  "Terra.form.select.searchUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.selectCleared": "Se borró el valor seleccionado",
  "Terra.form.select.selected": "Seleccionado.",
  "Terra.form.select.selectedText": "Se seleccionó {text}.",
  "Terra.form.select.unselected": "No seleccionado.",
  "Terra.form.select.unselectedText": "{text} sin seleccionar.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icono para instrucciones electrónicas de uso",
  "Terra.InfiniteList.loading": "Cargando...",
  "Terra.menu.back": "Retroceder",
  "Terra.menu.close": "Cerrar",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Información",
  "Terra.notification.dialog.success": "Éxito",
  "Terra.notification.dialog.warning": "Advertencia",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.popup.header.close": "Cerrar",
  "Terra.searchField.clear": "Borrar",
  "Terra.searchField.search": "Buscar",
  "Terra.searchField.submit-search": "Enviar búsqueda",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "Sin resultados",
  "Terra.status-view.no-matching-results": "Sin resultados coincidentes",
  "Terra.status-view.not-authorized": "No autorizado",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "No guardar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Hay cambios no guardados en:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Si no se guardan los cambios, se perderán. ¿Cómo desea continuar?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Hay cambios no guardados en {promptDescription}. Si no se guardan los cambios, se perderán. ¿Cómo desea continuar?",
  "terraApplication.unsavedChangesPrompt.title": "Hay cambios no guardados."
};
var areTranslationsLoaded = true;
var locale = 'es';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
