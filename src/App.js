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
    }).then(function() {
      self.getPatients();
    });
  }

  getPatients() {
    const self = this;
    let fullURL = this.getServerURL() + "/Patient/" + this.getPatientId(); 
    fetch(fullURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.getAccessToken()
      }
    }).then(data => {
      self.setState({ fhir_response: "Status: " + data.status });
    });
  }
  
  getAccessToken() {
    let sessionId = sessionStorage.getItem("SMART_KEY");
    let sessionObj = sessionId ? sessionStorage.getItem(sessionId.replace(/["']/g, "")) : null;
    let token = sessionObj ? JSON.parse(sessionObj).tokenResponse.access_token : '';
    return token;
  }

  getPatientId() {
    let sessionId = sessionStorage.getItem("SMART_KEY");
    let sessionObj = sessionId ? sessionStorage.getItem(sessionId.replace(/["']/g, "")) : null;
    let patientId = sessionObj ? JSON.parse(sessionObj).tokenResponse.patient : '';
    return patientId;
  }

  getServerURL() {
    let sessionId = sessionStorage.getItem("SMART_KEY");
    let sessionObj = sessionId ? sessionStorage.getItem(sessionId.replace(/["']/g, "")) : null;
    let url = sessionObj ? JSON.parse(sessionObj).serverUrl : '';
    return url;
  }

  render() {
    return (
      <div className="App">
		<TestAlert />
        {this.state && this.state.patientName }
        {this.state && this.state.patientInfo }
        <br></br>
        {this.state && this.state.fhir_response}
      </div>
    );
  }
}

export default App;
