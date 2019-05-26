import React, { Component } from 'react';
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import MapComponent  from './Mapcomponent'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class StepperExample extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        currentLatLng: {
          lat: 0,
          lng: 0
        },
        isMarkerShown: false }    
    } 

    componentWillUpdate(){
      this.getGeoLocation()
    }
  
    componentDidMount() {
      this.delayedShowMarker()
    }
  
    delayedShowMarker = () => {
      setTimeout(() => {
        this.getGeoLocation()
        this.setState({ isMarkerShown: true })
      }, 3000)
    }
  
    handleMarkerClick = () => {
      this.setState({ isMarkerShown: false })
      this.delayedShowMarker()
    } 

    getGeoLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              position => {
                  console.log(position.coords);
                  this.setState(prevState => ({
                      currentLatLng: {
                          ...prevState.currentLatLng,
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                      }
                  }))
              }
          )
      } 
  }
  
 adduser=()=>{
        axios.post('/adddoctor',{...this.state}).
        then(res=>{this.props.adddoctorReducer({...this.state});
          alert(`Your registration detail: \n 
          Nom: ${this.state.nom} \n 
          Prenom: ${this.state.prenom}
          Email: ${this.state.email} \n
          `); 
         })
    }
  
    afficherConference=()=> {
      var e = document.getElementById("p");
      var strUser = e.options[e.selectedIndex].value;
      console.log(strUser)
      var idconference = document.getElementById("idconference");
    
    if ( e.options[e.selectedIndex].value==="CF"){
      idconference.style.display = "block";
    } else {
      idconference.style.display = "none";
    }
  } 

    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    // handleSubmit = event => {
    //   event.preventDefault()
    //   const { email, nom, prenom } = this.state
    //   alert(`Your registration detail: \n 
    //          Email: ${email} \n 
    //          Username: ${nom} \n
    //          Password: ${prenom}`)
    // }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Suivant
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        {/* <h3 className="px-5 mx-5 pink-text font-weight-bolder"> Step {this.state.currentStep} </h3>  */}
  
        <form  style={{width:'600px'}} >
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handlechange={this.handleChange}
            email={this.state.email}
            telephone={this.state.telephone}
            specialite={this.state.specialite}
            password={this.state.password} 
            prenom={this.state.prenom}
            adresse={this.state.adresse}
            nom={this.state.nom}
            pays={this.state.pays}
            delegation={this.state.delegation}
            gouvernerat={this.state.gouvernerat}
            nomconference={this.state.nomconference}
            afficherConference={this.afficherConference}

          />
          <Step2 
            currentStep={this.state.currentStep} 
            handlechange={this.handleChange}
            titre={this.state.titre} 
            nom={this.state.nom}
            prenom={this.state.prenom}
            genre={this.state.genre} 
            file={this.state.file} 



          />
          <Step3 
            currentStep={this.state.currentStep} 
            handlechange={this.handleChange}
            adduser={this.adduser} 
            fixe={this.state.fixe}
            formation={this.state.formation}
            adresse={this.state.adresse} 
            gouvernerat={this.state.gouvernerat} 
            delegation={this.state.delegation} 
            telephone={this.state.telephone}

            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            currentLocation={this.state.currentLatLng}
            

          />
          {this.previousButton()}
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
<div className="text-center ">
                <h2 className="white-text mb-2 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Vous etes Nouveau sur E-hygiene ? </strong>
                  </a> 
                </h2> 
                <p> Merci de saisir vos informations </p>
              </div>
<MDBRow className="my-2" >  
             <MDBCol md="6">   
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
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
             Prenom
            </label>
            <input
              type="text"
              name="prenom"
              onChange={props.handlechange} 
              value={props.prenom}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
             <MDBRow className="my-2" > 
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Specialité personnalisé
            </label>
            <div>
        <select className="browser-default custom-select"
          name="specialite"
          value={props.specialite}
          onChange={props.handlechange}
        >
                                                            <option>Choisir  Specialite</option>
                                                            <option value="Médecine générale" >Médecine générale</option>
                                                            <option value="Médecine dentaire" >Médecine dentaire</option>
                                                            <option value="Cardiologie" >Cardiologie</option>
                                                            <option value="Dermatologie" >Dermatologie</option>
                                                            <option value="Endocrinologie-Diabétologie" >Endocrinologie-Diabétologie</option>
                                                            <option value="Gynécologie" >Gynécologie</option>
                                                            <option value="Ophtalmologie" >Ophtalmologie</option>
                                                            <option value="O.R.L" >O.R.L</option>
                                                            <option value="Orthopédie - Traumatologie" >Orthopédie - Traumatologie</option>
                                                            <option value="Pédiatrie" >Pédiatrie</option>
                                                            <option value="Psychiatrie" >Psychiatrie</option>
                                                            <option value="Sexologie" >Sexologie</option>
                                                            <option value="Médecine esthétique" >Médecine esthétique</option>
                                                            <option value="Gastro-entérologue" >Gastro-entérologue</option>
                                                            <option value="Carcinologie" >Carcinologie</option>
                                                            <option value="Urologie" >Urologie</option>
                                                            <option value="Je ne sais pas" >Je ne sais pas</option>
                                                            <option value="Hématologie" >Hématologie</option>
                                                            <option value="Neurologie" >Neurologie</option>
                                                            <option value="Nutrition" >Nutrition</option>
                                                            <option value="Rhumatologie" >Rhumatologie</option>
                                                            <option value="Néphrologie" >Néphrologie</option>
                                                            <option value="Pédopsychiatrie" >Pédopsychiatrie</option>
                                                            <option value="Orthophonie" >Orthophonie</option>
                                                            <option value="Pneumologie" >Pneumologie</option>
                                                            <option value="Médecine interne" >Médecine interne</option>

           </select>
      </div>
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Telephone Mobile
            </label>
            <input
              type="text"
              name="telephone"
              value={props.telephone}
              onChange={props.handlechange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
             <MDBRow className="my-2" > 
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={props.email}
              onChange={props.handlechange}
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={props.password}
              onChange={props.handlechange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
              <MDBRow className="my-2"> 
                  <MDBCol md="12"> 
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Adresse
            </label>
            <input
              type="text"
              name="adresse"
              value={props.adresse}
              onChange={props.handlechange}
              id="defaultFormContactSubjectEx"
              className="form-control"
            /> 
            </MDBCol>
            </MDBRow> 

            <MDBRow className="my-2" > 
             <MDBCol md="4">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Pays
            </label>
            <div>
        <select className="browser-default custom-select" 
          name="pays"
          value={props.pays}
          onChange={props.handlechange} >
                                      <option>Choisir Pays</option>
                                      <option value="tunisie" >Tunisie</option>
                                      <option value="algerie" >Algérie</option>
                                      <option value="maroc" >Maroc</option>
                                      <option value="egypte" >Egypte</option>
                                      <option value="turquie" >Turquie</option>
                                      <option value="arabie saoudite" >Arabie saoudite</option>
                                      <option value="senegal" >Sénégal</option>
                                      <option value="emirates" >Emirats arabes unis</option>
        </select>
      </div>
 


            </MDBCol>  
            <MDBCol md="4"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Governerat
            </label>
            <div>
        <select className="browser-default custom-select" 
          name="gouvernerat"
          value={props.gouvernerat}
          onChange={props.handlechange}
          >
                                   <option >Choisir  Governerat</option>
                                   <option value="Ariana" >Ariana</option>
                                    <option value="Beja" >Beja</option>
                                    <option value="Ben arous" >Ben arous</option>
                                    <option value="Bizerte" >Bizerte</option>
                                    <option value="Gabes" >Gabes</option>
                                    <option value="Gafsa" >Gafsa</option>
                                    <option value="Jendouba" >Jendouba</option>
                                    <option value="Kairouan" >Kairouan</option>
                                    <option value="Kasserine" >Kasserine</option>
                                    <option value="Kebili" >Kebili</option>
                                    <option value="Le Kef" >Le Kef</option>
                                    <option value="Mahdia" >Mahdia</option>
                                    <option value="Mannouba" >Mannouba</option>
                                    <option value="Medenine" >Medenine</option>
                                    <option value="Monastir" >Monastir</option>
                                    <option value="Nabeul" >Nabeul</option>
                                    <option value="Sfax" >Sfax</option>
                                    <option value="Sidi bouzid" >Sidi bouzid</option>
                                    <option value="Siliana" >Siliana</option>
                                    <option value="Sousse" >Sousse</option>
                                    <option value="Tataouine" >Tataouine</option>
                                    <option value="Tozeur" >Tozeur</option>
                                    <option value="Tunis" >Tunis</option>
                                    <option value="Zaghouan" >Zaghouan</option>
      </select>
      </div>
             
             </MDBCol>  
             <MDBCol md="4"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Delegation
            </label>
            <div>
        <select className="browser-default custom-select" 
          name="delegation"
          value={props.delegation}
          onChange={props.handlechange}
          >
          <option>Choisir Delegation</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
             
             </MDBCol> 
             </MDBRow> 
             <MDBRow className="my-2"> 
                  <MDBCol md="12"> 
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Comment avez-vous entendu parler de nous ?
            </label>
          <select placeholder="Comment avez-vous entendu parler de nous ?" 
           onChange={()=>{props.afficherConference();}}
           name="a"
           id="p"
          className="browser-default custom-select" >
          <option value="">Comment avez-vous entendu parler de nous ?</option> 
                    <option value="AU">Par l'affichage urbain</option>
                    <option value="CF">Par un confrère</option>
                    <option value="RS">Par les réseaux sociaux</option>
                    <option value="PR">Par un proche</option>
                    <option value="RD">À la radio</option>
                    
          </select>
            </MDBCol>
            </MDBRow>  

            <MDBRow className="my-2" id="idconference" style={{display:'none'}}> 
                  <MDBCol md="12"> 
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Nom de votre conference 
            </label>
            <input
              type="text"
              name="nomconference"
              value={props.nomconference}
              onChange={props.handlechange}
              id="defaultFormContactSubjectEx"
              className="form-control"
            /> 
            </MDBCol>
            </MDBRow> 

            


            
</div>


    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return( <>
         <h1> Informations Personnelles </h1> 
         <MDBRow className="my-2" >  
             <MDBCol md="6">   
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
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
             Prenom
            </label>
            <input
              type="text"
              name="prenom"
              onChange={props.handlechange} 
              value={props.prenom}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
        <MDBRow className="my-2" >  
        <MDBCol md="6">   
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
         Titre
       </label>
        <select name="titre" className="browser-default custom-select" onChange={props.handlechange}  value={props.titre}> 
            <option value="professeur"> Professeur </option> 
            <option value="docteur"> Docteur </option> 
            <option value="monsieur"> Monsieur </option> 
            <option value="madame"> Madame </option> 
            <option value="mademoiselle"> Madamoiselle </option> 
        </select>
       </MDBCol>  
       <MDBCol md="6"> 
       <label htmlFor="defaultFormContactEmailEx" className="grey-text">
        Genre
       </label>
       <select name="genre" className="browser-default custom-select" onChange={props.handlechange}  value={props.genre}> 
            <option value="femme"> Femme</option> 
            <option value="homme"> Homme </option> 
         
        </select> 
       </MDBCol>
       </MDBRow> 
       <MDBRow className="mt-4 mb-5"> 
        <MDBCol md="12"> 
            <div className="input-group">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                     telecharger
                       </span>
               </div>
             <div className="custom-file">
                       <input
                  type="file" 
                  name="file"
                  value={props.file}
                  onChange={props.handlechange}
                className="custom-file-input"
                     id="inputGroupFile01"
               aria-describedby="inputGroupFileAddon01"
                     />
                 <label className="custom-file-label" htmlFor="inputGroupFile01">
                              APTITUDE PROFESSIONNELLE                          </label>
                      </div> 
                     </div> 
                  </MDBCol>
              </MDBRow> 
         
        
       
        </>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment> 
           <h1> Coordonnees </h1>
           <MDBRow className="my-2"> 
                  <MDBCol md="12"> 
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Adresse
            </label>
            <input
              type="text"
              name="adresse"
              value={props.adresse}
              onChange={props.handlechange}
              id="defaultFormContactSubjectEx"
              className="form-control"
            /> 
            </MDBCol>
            </MDBRow> 
            <MDBRow> 
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Governerat
            </label>
            <div>
        <select className="browser-default custom-select" 
          name="gouvernerat"
          value={props.gouvernerat}
          onChange={props.handlechange}
          >
                                   <option >Choisir  Governerat</option>
                                   <option value="Ariana" >Ariana</option>
                                    <option value="Beja" >Beja</option>
                                    <option value="Ben arous" >Ben arous</option>
                                    <option value="Bizerte" >Bizerte</option>
                                    <option value="Gabes" >Gabes</option>
                                    <option value="Gafsa" >Gafsa</option>
                                    <option value="Jendouba" >Jendouba</option>
                                    <option value="Kairouan" >Kairouan</option>
                                    <option value="Kasserine" >Kasserine</option>
                                    <option value="Kebili" >Kebili</option>
                                    <option value="Le Kef" >Le Kef</option>
                                    <option value="Mahdia" >Mahdia</option>
                                    <option value="Mannouba" >Mannouba</option>
                                    <option value="Medenine" >Medenine</option>
                                    <option value="Monastir" >Monastir</option>
                                    <option value="Nabeul" >Nabeul</option>
                                    <option value="Sfax" >Sfax</option>
                                    <option value="Sidi bouzid" >Sidi bouzid</option>
                                    <option value="Siliana" >Siliana</option>
                                    <option value="Sousse" >Sousse</option>
                                    <option value="Tataouine" >Tataouine</option>
                                    <option value="Tozeur" >Tozeur</option>
                                    <option value="Tunis" >Tunis</option>
                                    <option value="Zaghouan" >Zaghouan</option>
      </select>
      </div>
             
             </MDBCol>  
             <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Delegation
            </label>
            <div>
        <select className="browser-default custom-select" 
          name="delegation"
          value={props.delegation}
          onChange={props.handlechange}
          >
          <option>Choisir Delegation</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
             
             </MDBCol> 
            </MDBRow>

            <MDBRow className="my-3">
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Telephone Fixe :
            </label>
            <input
              type="text"
              name="fixe"
              value={props.fixe}
              onChange={props.handlechange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
              
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Telephone Mobile
            </label>
            <input
              type="text"
              name="telephone"
              value={props.telephone}
              onChange={props.handlechange}
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol>  
            </MDBRow>

            <MDBRow className="my-2" style={{width: "100%", height: "500"}}> 
            
          <MDBCol> 
          <MapComponent
        isMarkerShown={props.isMarkerShown}
        onMarkerClick={props.handleMarkerClick}
        currentLocation={props.currentLocation}
      />
          </MDBCol>
             
            
            </MDBRow> 

            <MDBRow className="my-3">
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Longitude :
            </label>
            <input
              type="text"
              name="lng"
              value={props.currentLocation.lng} 
              onChange={props.handlechange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
              
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Latitude
            </label>
            <input
              type="text"
              name="lat"
              value={props.currentLocation.lat} 
              onChange={props.handlechange}
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol> 
            </MDBRow> 

            <MDBRow className="px-2"> 
            <label htmlFor="defaultFormContactEmailEx" className="mt-2 grey-text">
                Formations et Diplomes   
             </label>  
            <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text bg-light" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea
             className="form-control"
             name="formation" 
             value={props.formation}
             rows="4"
             onChange={props.handlechange}>
              Remplir vos formations et vos etudes 
            
            </textarea> 
        </div>
            </MDBRow>

       <MDBRow> 
       <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck17"
                  />
                  <label
                    className="form-check-label white-text"
                    htmlFor="defaultCheck17"
                  >
                    J'accepte les CGU ainsi que la charte de 
                    <a href="#!" className="green-text font-weight-bold">
                       Terms and Conditions
                    </a>
                  </label>
                </div>
       </MDBRow>
       <MDBRow> 
       <MDBCol className="d-flex justify-content-center align-items-center"> 
       <Link to={`/authentification`}> 
      
                  <button   onClick={props.adduser} className="btn white-text btn-block" style={{backgroundColor:'purple'}}> S'inscrire </button>
       </Link>
       </MDBCol>
       </MDBRow>
       

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
  
  
  export default connect(null,mapDispatchToProps)(StepperExample);



