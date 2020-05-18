--------------------------------------------------------------------------------------------------------------
                              Cerner SMART App / ReactJS / Terra UI Setup Guide
--------------------------------------------------------------------------------------------------------------

Prerequisites: 
- Install both Node (10.16.3) & NPM (6.9.0)
- Install create-react-app globally with 'npm install -g create-react-app'
- Install webpack globally with 'npm install -g webpack'

1.  In the terminal, create a react app with the following command
    'create-react-app [name of app]'
2.  In the terminal, cd to your new app
3.  In the command line run:
	npm config set puppeteer_skip_chromium_download true
4.  In the command line run the following commands:
	npm install --save-dev @babel/cli @babel/core @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-object-assign @babel/preset-env @babel/preset-react browserslist-config-terra copy-webpack-plugin core-js dotenv eslint eslint-config-terra gh-pages glob raf regenerator-runtime shx stylelint stylelint-config-terra terra-aggregate-translations terra-dev-site terra-toolkit webpack webpack-cli webpack-dev-server webpack-node-externals
	npm install --save axe-core axe-reports classnames express fhirclient final-form html-webpack-plugin jquery lodash prop-types puppeteer react react-dom react-final-form react-particles-js react-router-dom sass-loader terra-action-header terra-alert terra-i18n 
5.  Create a file named 'webpack.config.js' in the root of your project folder and copy/paste from the
    "webpack" section on the Appendix
6.  Create a file named 'babel.config.js' in the root of your project folder and copy/paste from the
    "Babel" section on the Appendix
7.  Create a file named 'terraI18n.config.js' in the root of your project folder and copy/paste from the
    "terraI18n" section on the Appendix
8.  In the 'public' folder, overwrite your index.html with the HTML from the "indexHTML" section on the Appendix
9.  In the 'public' folder create 'launch.html' with the code from the "launch" section on the Appendix
10. In the 'src' folder, overwrite your index.js with the code from the "indexJS" section on the Appendix
11. In the 'src' folder, overwrite your App.js with the code from the "appJS" section on the Appendix
12. In the 'src' folder create 'server.js' with the code from the "server" section on the Appendix
    --- Optional TerraUI Test ---
    12a. In your src folder Create TestAlert.js with the code from the "testAlert" section on the Appendix
    12b. In src/App.js add the import "import TestAlert from './TestAlert';" (without quotes)
    12c. Add <TestAlert /> tag to the HTML (inside <div className="App">)
    12d. This is to confirm the webpack loaded the TerraUI correctly. You should see a yellow warning (Terra UI) on your page.
13. Setup environment variables
    13a. In your app root dir Create a file named '.env' with this single line of code "REACT_APP_URL=http://www.testurl.net" (without quotes)
    13b. In the terminal, run 'webpack --config webpack.config.js'
18. In the terminal cd to 'build' and run 'node server.js'
19. On code.cerner.com/developer/smart-on-fhir/ create an application
    19a. Name the app with 'App Name' and modify the FHIR.oauth2.authorize in 'launch.html' in your build folder
    19b. Smart Launch URI: http://localhost:8000/dev/launch.html      Redirect URI: http://localhost:8000/dev/
    19c. FHIR Spec: dstu2       Authorized: Yes         Scopes: launch/profile/openid/online_access
    19d. User Scopes; select all
20. Change your launch client_id
    20a. Open public/launch.html
    20b. Change 'client_id' to the 'Client Id' under 'App Info' on your Cerner app
    20c. In the terminal, cd back to the root and rerun 'npm run-script dev'
20. On the Cerner site click your app, and select 'Begin Testing', select a patient, and hit next
21. Click 'Launch' (you may be taken to a login screen, enter the following -- user:portal  pass:portal)
22. You should now see the basic information of your patient!



****************************************************************************************************
                                        Appendix
****************************************************************************************************



==================================================

Webpack

==================================================

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');
const fs = require('fs');
// Import the terra-toolkit configuration.
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');


// Create the app-level configuration
const appWebpackConfig = (env) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const fileEnv = dotenv.config({ path: basePath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});


  return {
    entry: {
      index: path.resolve(path.join(__dirname, 'src', 'index')),
      fhir: path.resolve(path.join(__dirname, 'node_modules', 'fhirclient', 'build', 'fhir-client.min.js'))
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          template: path.join(__dirname, 'public', 'index.html'),
          excludeChunks: [ 'node' ]
        }),
        new HtmlWebpackPlugin({
          inject: true,
          chunks: ['fhir'],
          template: path.join(__dirname, 'public', 'launch.html'),
          filename: 'launch.html',
          excludeChunks: [ 'node' ]
        }),
        new webpack.DefinePlugin(envKeys),
		new CopyPlugin({
		  patterns: [
			{ 
				from: 'public/launch.html', 
				to: '', 
				context: __dirname
			}
		  ],
		})
    ],
  }
};

const testServerConfig = (env) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const fileEnv = dotenv.config({ path: basePath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});


  return {
    target: 'node',
    name: 'server',
    entry: path.resolve(path.join(__dirname, 'src', 'server')),
    output: {
      path: path.resolve(__dirname + '/build'),
      filename: 'server.js'
    },
    externals: [nodeExternals()],
    mode: 'none',
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
    node: {
      __dirname: false
    }
  }
};


// combine the configurations using webpack-merge
const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), appWebpackConfig(env, argv))
);

module.exports = [mergedConfig, testServerConfig];

==================================================

Babel

==================================================

module.exports = (api) => {
  api.cache(false);
  api.assertVersion('^7.4.4');

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};

==================================================

terraI18n

==================================================

const path = require('path');

const i18nConfig = {
  directories: [path.join('node_modules', 'terra-*', 'translations')],
};

module.exports = i18nConfig;

==================================================

indexHTML

==================================================

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

==================================================

indexJS

==================================================

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

==================================================

appJS

==================================================

import React from 'react';
import './App.css';
import TestAlert from './TestAlert';

class App extends React.Component {

  componentDidMount() {
    const self = this;
	console.log("Test for Env Variables: " + process.env.REACT_APP_URL);
    FHIR.oauth2.ready(function(smart){
      smart.patient.read().then(function(pt) {
        //self.setState({ patientName: pt.name[0].text });
        self.setState({ patientInfo: 
          <ul>
            <li>ID: { pt.id }</li>
            <li>Gender: { pt.gender }</li>
            <li>Birthdate: { pt.birthDate }</li>
            <li>Marital Status: { pt.maritalStatus && pt.maritalStatus.text }</li>
            <li>Address: { pt.address && pt.address[0].text }</li>
          </ul>});
      });
	  self.setState({ patientName: smart.state.tokenResponse.access_token });
    });
  }

  render() {
    return (
      <div className="App">
		<TestAlert />
        {this.state && this.state.patientName }
        {this.state && this.state.patientInfo }
      </div>
    );
  }
}

export default App;

==================================================

launch

==================================================

<!DOCTYPE html>
<html>
  <head>
  </head>
    <body>Loading...</body>
    <script>
      // Launch via Smart-on-FHIR
      FHIR.oauth2.authorize({
          'client_id': 'justinatwater',
          'scope': 'patient/Patient.read launch online_access openid profile'
      });
    </script>
</html>

==================================================

server

==================================================

const express = require('express');
const app = express();
const port = 8000;

app.use('/', express.static(__dirname));

app.get('/', function(req, res){
  res.send('Invalid Endpoint!');
});

app.listen(port, function(){
  console.log('Server started on port: ' + port);
});

==================================================

testAlert

==================================================


import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';
import $ from 'jquery';


class TestAlert extends React.Component {
  render() {
    return (
      <div className="TestAlert_Alert">
        <Alert type="warning">This is a warning</Alert>
      </div>
    ) 
  }
}

export default TestAlert;
