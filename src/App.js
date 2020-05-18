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
