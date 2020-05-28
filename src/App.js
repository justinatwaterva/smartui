import React from 'react';
import './App.css';
import TestAlert from './TestAlert';

class App extends React.Component {

  componentDidMount() {
    const self = this;
  	console.log("Test for Env Variables: " + process.env.REACT_APP_URL);
    FHIR.oauth2.ready(function(smart){
        /*
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
        */

        self.getPatients();
    });
  }

  xgetPatients() {
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

  getPatients() {
    const self = this;
    //let fullURL = this.getServerURL() + "/Patient/" + this.getPatientId(); 
    let fullURL = "http://localhost:8080/rating-service/"+ this.getPatientId()+ "/read"
    fetch(fullURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'token':  this.getAccessToken(),
        'Access-Control-Allow-Methods': 'DELETE, GET, POST, PUT, OPTIONS, HEAD',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'ETag, Content-Location, Location, X-Request-Id, WWW-Authenticate, Date',
        'Access-Control-Max-Age': '0'        
      }
    }).then(response => response.json())
    .then(response => {
      //self.setState({ rating_response: "Status: " + data.status });
      self.setState({ ratingdata:  JSON.stringify(response) });
      self.setState({data:  response });
      //self.setState({messages:  JSON.stringify(response.messages) });

      if ( response.httpCode == 'OK' ) {
        self.setState({ patientInfo: 
          <ul>
            <li>ID: { this.getPatientId() }</li>
            <li>Gender: {response.sex }</li>
            <li>MRN: {response.mrn }</li>
            <li>Name: {response.name }</li>
            <li>Birthdate: {response.dob }</li>
            <li>Combined Evaluation Percentage :  {response.ratingData.combinedEvalPercent}</li>
            <li>Combined Evaluation Effective Date: { response.ratingData.combinedEvalEffectiveDt.toLocaleString()}}</li>
            <li>Rating Disabilities : </li>
          </ul>});


          var disabilityArray = []
          for (var i = 0; i < response.ratingData.ratedDisabilities.length; i++) {
            disabilityArray.push(
                <>
                  <li>Disability {i+1}</li>
                  <li>Disability Line 1 : {response.ratingData.ratedDisabilities[i].disabilityLine1}</li>
                  <li>Disability Line 2 : {response.ratingData.ratedDisabilities[i].serviceConnectedLine2}</li>
                  <li>Disability Line 3 : {response.ratingData.ratedDisabilities[i].disabilityHistLine3}</li>
                </>
              )
          }
          self.setState({ ratedDisabilities : disabilityArray });
      } else {
        self.setState( { messages : response.messages });

        var messagesArray = []
        for (var k = 0; k < response.messages.length; k++) {
          messagesArray.push(
              <>
                <li>Message {k+1}</li>
                <li>Code : {response.messages[k].code}</li>
                <li>Description : {response.messages[k].description}</li>
              </>
            )
        }
        self.setState({ messagesArray : messagesArray });



      }

      return response;
    });
  } 
 
  myFunction(disability, index) {
    <li>Rating Disability : {JSON.stringify(disability)}</li>
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
		<TestAlert/> 
        {this.state && this.state.patientName }
        {this.state && this.state.patientInfo }
        {this.state && this.state.ratedDisabilities}

        {this.state && this.state.ratingdata}
        <br></br>

        {this.state && this.state.messagesArray}

      </div>
    );
  }
}

export default App;
