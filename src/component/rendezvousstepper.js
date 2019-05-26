import React, { Component } from 'react';
import axios from 'axios'
import { MDBRow, MDBCol,MDBIcon, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class StepperRendezVous extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
        
    
   envoyerSMS=()=>{

    const messageAenvoyer = document.getElementById("messageAenvoyer").value;
    const numTelToElement = document.getElementById("numTelToElement").value;

    const message = encodeURI(messageAenvoyer);
    const numTelTo = encodeURI(numTelToElement);

    const url = "https://api.twilio.com/2010-04-01/Accounts/TON_ACCOUNT_SID/Messages.json";
    const auth = "TON_CODE_API:TON_PASS_API";

    const myHeader = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization':'Basic ' + btoa(auth)
    });

    const init = {
        method :'POST',
        headers : myHeader,
        mode : 'cors',
        body:"To="+numTelTo+"&From=%TON_MUM_EXP&Body="+message
    }

    fetch(url, init)
        .then(response => console.log(response))
        .catch(error => console.log(error));

} 
    
    handleChange(date) {
        this.setState({
          startDate: date
        }); 
      }
  
   handlechange=(event)=>{
          this.setState({
              [event.target.name]:event.target.value
          })
      }
  

   
  
 addrendezvous=()=>{
        axios.post('/addrendezvous',{...this.state}).
        then(res=>{this.props.addrdvReducer({...this.state});
          alert(`Your registration detail: \n 
          Nom: ${this.state.nom} \n 
          Prenom: ${this.state.prenom}
          Email: ${this.state.email} \n
          `); 
         })
    }
  
 
 
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
   
  afficher=()=>{
      document.getElementById('parent').style.display="block"
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <2 ){
      return (  
        <MDBBtn color="purple"  className="btn btn-primary float-right"  onClick={this._next}> 
        Suivant
        </MDBBtn>     
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        {/* <h3 className="px-5 mx-5 pink-text font-weight-bolder"> Step {this.state.currentStep} </h3>  */}
  
        <form  style={{width:'500px'}} >
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handlechange={this.handleChange}
            startDate={this.state.startDate}
            nom={this.state.nom}
            afficher={this.afficher}
            telephone={this.state.telephone}
            handleChange={this.handleChange}

          />
          <Step2 
            currentStep={this.state.currentStep} 
            handlechange={this.handleChange}
            telephone={this.state.telephone}

           



          />
          <Step3 
            currentStep={this.state.currentStep} 
            handlechange={this.handleChange}
        
            

          />
          {this.nextButton()}
  
        </form>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
   
     
<div> 

<h3 className="font-weight-bolder purple-text">  Choisir la date et l'heure du rendez-vous </h3>

 <div className="d-flex justify-content-center"> 
 <DatePicker
selected={props.startDate}
onChange={props.handleChange}
onBlur={props.afficher}
className="red-border" />

 </div>

<div id="parent" className="mt-5" style={{display:"none"}}> 
<h3 className="font-weight-bolder text-center purple-text">  Saisissez vos informations </h3> 
<MDBRow className="my-2" >  
  <MDBCol md="12">   
  <label htmlFor="defaultFormContactNameEx" className="grey-text">
   Nom
 </label>
 <input
   type="text"
   name="nom"
   onChange={props.handlechange}
   value={props.nom}
   id="defaultFormContactNameEx"
   className="form-control"
   required />
 </MDBCol>  
 <MDBCol md="12"> 
 <label htmlFor="defaultFormContactEmailEx" className="grey-text">
  Telephone
 </label>
 <input
   type="text"
   name="telephone"
   onChange={props.handlechange} 
   value={props.telephone}
   id="defaultFormContactEmailEx"
   className="form-control" />
  
  </MDBCol>  
  </MDBRow> 

<p className="pink-text font-weight-bolder"> 
Un code va vous être envoyé sur ce numéro pour valider votre RDV. </p>
<p>  En cliquant sur «Soumettre», vous acceptez les CGU ainsi que la charte de site E-hygiene </p> 

   </div>


</div>


    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return( <>
        
         <h4 className="purple-text font-weight-bolder pt-2"> 
         Veuillez saisir le code à 4 chiffres que nous venons de vous envoyer par SMS {props.telephone} </h4>
             <div className="d-flex">
             <input type="text" placeholder="####" style={{width:'200px'}} className="form-control" />
               <MDBBtn color="purple" onclick={props.envoyerSMS}> valider </MDBBtn>
             </div>
               
       <p> 
       Le temps de réception du code par SMS est dépendant du réseau de votre opérateur. 
       Au-delà de 2 minutes, nous vous invitons à vérifier votre numéro de téléphone et
        recevoir un nouveau code.
       </p> 
       <MDBBtn color="pink"> Recevoir un nouveau code </MDBBtn>
        </>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment> 
           <p> 
               votre demance est prise en compte sjdsjj 
           </p>
     
       

      </React.Fragment>
    );
  } 


  const mapDispatchToProps=(dispatch)=>{
    return {
      adddoctorReducer:newdoctor=>{
        dispatch({
          type:'ADD_DOCTOR',
          newdoctor
        })
      }
    }
  }
  
  
  export default connect(null,mapDispatchToProps)(StepperRendezVous);



