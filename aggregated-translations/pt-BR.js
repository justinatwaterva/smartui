'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Iniciar diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Caixa de diálogo modal final",
  "Terra.actionHeader.back": "Voltar",
  "Terra.actionHeader.close": "Fechar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Avançar",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.alert.advisory": "Informe.",
  "Terra.alert.alert": "Alerta.",
  "Terra.alert.dismiss": "Ignorar",
  "Terra.alert.error": "Erro.",
  "Terra.alert.info": "Informações.",
  "Terra.alert.success": "Êxito.",
  "Terra.alert.unsatisfied": "Ação exigida.",
  "Terra.alert.unverified": "Registros externos.",
  "Terra.alert.warning": "Aviso.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Itens de navegação",
  "Terra.applicationNavigation.drawerMenu.utilities": "Itens de utilitários",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Pular para conteúdo",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Opções",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Configurações do usuário",
  "Terra.applicationNavigation.notifications.new": "Novo",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Mais navegação",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Mais",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Mais navegação",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilitários",
  "Terra.applicationNavigation.utilityMenu.help": "Ajuda",
  "Terra.applicationNavigation.utilityMenu.logout": "Logoff",
  "Terra.applicationNavigation.utilityMenu.settings": "Configurações",
  "Terra.devSite.themed.help": "Ajuda",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.select.add": "Adicionar \"{text}\"",
  "Terra.form.select.ariaLabel": "Pesquisar",
  "Terra.form.select.clearSelect": "Limpar seleção",
  "Terra.form.select.defaultDisplay": "- Selecione -",
  "Terra.form.select.defaultUsageGuidance": "Use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar uma opção.",
  "Terra.form.select.dimmed": "Esmaecido.",
  "Terra.form.select.disabled": "Desativado.",
  "Terra.form.select.listOfTotalOptions": "Lista de {total} opções.",
  "Terra.form.select.maxSelectionHelp": "Limite de itens de {text}.",
  "Terra.form.select.maxSelectionOption": "Número máximo de itens de {text} selecionado",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Toque a tela para navegar para as opções.",
  "Terra.form.select.mobileUsageGuidance": "Deslize para a direita para acessar as opções.",
  "Terra.form.select.multiSelectUsageGuidance": "Insira o texto ou use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar ou cancelar a seleção de uma opção.",
  "Terra.form.select.noResults": "Não há resultados para \"{text}\"",
  "Terra.form.select.optGroup": "Grupo {text}",
  "Terra.form.select.option": "Opções",
  "Terra.form.select.searchUsageGuidance": "Insira o texto ou use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar uma opção.",
  "Terra.form.select.selectCleared": "Selecionar valor limpo",
  "Terra.form.select.selected": "Selecionado.",
  "Terra.form.select.selectedText": "{text} selecionado.",
  "Terra.form.select.unselected": "Não selecionado.",
  "Terra.form.select.unselectedText": "{text} não selecionado.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Instruções eletrônicas para ícone de uso",
  "Terra.InfiniteList.loading": "Carregando...",
  "Terra.menu.back": "Voltar",
  "Terra.menu.close": "Fechar",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Erro",
  "Terra.notification.dialog.info": "Informações",
  "Terra.notification.dialog.success": "Êxito",
  "Terra.notification.dialog.warning": "Advertência",
  "Terra.Overlay.loading": "Carregando...",
  "Terra.popup.header.close": "Fechar",
  "Terra.searchField.clear": "Limpar",
  "Terra.searchField.search": "Pesquisar",
  "Terra.searchField.submit-search": "Enviar pesquisa",
  "Terra.status-view.error": "Erro",
  "Terra.status-view.no-data": "Sem resultados",
  "Terra.status-view.no-matching-results": "Não há resultados correspondentes",
  "Terra.status-view.not-authorized": "Não autorizado",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Não salvar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Os seguintes itens contém alterações não salvas:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "As alterações serão descartadas se não forem salvas. Como deseja proceder?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Há alterações não salvas no {promptDescription}. As alterações serão descartadas se não forem salvas. Como deseja proceder?",
  "terraApplication.unsavedChangesPrompt.title": "Há alterações não salvas."
};
var areTranslationsLoaded = true;
var locale = 'pt-BR';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
