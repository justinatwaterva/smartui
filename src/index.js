import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Base from 'terra-base';
import appTranslations from '../aggregated-translations/en.js';

const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

ReactDOM.render(<Base locale={locale} customMessages={appTranslations}>
                    <App />
                </Base>, document.getElementById('root'));