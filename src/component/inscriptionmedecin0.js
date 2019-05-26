import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class InscriptionDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  } 

  handlechange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
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

  reset=()=>{
    this.setState({
      nom:'',
      prenom:'',
      email:'',
      telephone:'',
      password:'',
      adresse:'',
      pays:'',
      nomconference:''

    })
  }
 
  adddoctor=()=>{
    axios.post('/adddoctor',{...this.state}).
    then(res=>{this.props.adddoctorReducer({...this.state});
    alert('Mr/Mlle :'+ this.state.nom + this.state.prenom + 'vous etes inscrits ! bienvenus a votre Profil'); 
    this.reset()
   })
    .catch(err=>alert(err))
  }

  render() {
    return (<div>  <MDBView zoom className="mb-3">  
          <img 
          style={{height:'300px',width:'1400px', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
          src="http://images.trulia.com/blogimg/8/e/2/b/1235154_1277309469734_o.jpg"/> 

          <MDBMask overlay="black-slight" className="d-flex align-items-center">  
         <h3 className="diplay-2  px-5 text-center py-2 font-weight-bold white-text rgba-cyan-slight"> Rejoignez le premier réseau médical professionnel
          inscription gratuite et données 100% confidentielles </h3>
         </MDBMask>
          </MDBView>

        <MDBContainer> 
         <MDBRow> 
        <MDBCol md="4" className="align-self-center rounded pt-5 deep-purple-text rgba-cyan-slight">  
        <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon
                icon="flag-checkered"
                size="2x"
                className="deep-purple-text"
              />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3"> Fiabilité</h5>
              <p className="grey-text">
              Réduisez les rendez-vous non honorés grâce aux SMS de rappels illimités.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="clock" size="2x" className="deep-purple-text" /> 
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">  Gain de temps </h5>
              <p className="grey-text">
              Les patients peuvent accéder à vos créneaux disponibles 24h/24 et 7j/7.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="plus-circle" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Diversification de la patientèle</h5>
              <p className="grey-text">
               Soyez visible pour 200 000 patients étrangers par mois. (Algérie, Maroc, Libye, Afrique subsaharienne)
                </p>
            </MDBCol>
          </MDBRow> 
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="user" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3"> Fidélisation </h5>
              <p className="grey-text">
              Redirigez les appels de vos patients non décrochés vers la prise de rendez-vous en ligne,
               grâce à l’application de messagerie automatique.
                </p>
            </MDBCol>
          </MDBRow>
        
        </MDBCol>
        <MDBCol md="8">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-2 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Vous etes Nouveau sur E-hygiene ? </strong>
                  </a> 
                </h3> 
                <p> Merci de saisir vos informations </p>
              </div>
           

              <form className="text-left">
             <MDBRow className="my-2" >  
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Nom 
            </label>
            <input
              type="text"
              name="nom"
              onChange={this.handlechange}
              value={this.state.nom}
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
              onChange={this.handlechange} 
              value={this.state.prenom}
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
          value={this.state.specialite}
          onChange={this.handlechange}
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
              value={this.state.telephone}
              onChange={this.handlechange}
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
              value={this.state.email}
              onChange={this.handlechange}
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
              value={this.state.password}
              onChange={this.handlechange}
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
              value={this.state.adresse}
              onChange={this.handlechange}
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
          onChange={this.handlechange} >
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
          onChange={this.handlechange}
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
          onChange={this.handlechange}
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
           onChange={()=>{this.afficherConference();}}
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
              value={this.state.nomconference}
              onChange={this.handlechange}
              id="defaultFormContactSubjectEx"
              className="form-control"
            /> 
            </MDBCol>
            </MDBRow> 




          </form> 

              <div className=" md-form pb-3">
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
              </div>
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <Link to={`/authentification`}> 
                  <MDBBtn
                    color="purple"
                    rounded
                    type="button"
                    onClick={this.adddoctor}
                    className="btn-block z-depth-1"
                  >
                    Inscrire
                  </MDBBtn> 
                  </Link>
                </div>
              </MDBRow> 
              <MDBRow> 
              <MDBCol md="12" className="d-flex align-items-center flex-column">
                <p className="font-small white-text">
                Vous avez déjà utilisé E-hygiene ? </p>
                 <h4>  <Link to="/authentification" className="purple-text ml-1 font-weight-bold">
                    Connectez-Vous
                  </Link>
                </h4> 
              </MDBCol>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer> 
    <MDBRow className="m-5"> 
      <MDBCol md="4"> 
      <img 
      style={{width:'400px'}}
      src="http://www.cdyom.org/wp-content/uploads/2017/03/gif-rdv.gif"           /> </MDBCol> 
<MDBCol md="7" className="rgba-cyan-slight ml-4">
<h3 className="deep-purple-text font-weight-bold pt-4">     Pourquoi la gestion de la prise de rendez-vous  </h3> 
<hr style={{backgroundColor:'white',color:'pink',height:3, width:'700px'}} />
<div className="d-flex flex-column align-items-start ml-5" > 
<p> <MDBIcon icon="check" size="2x" className="deep-purple-text mr-2" /> Plus de 45% des rendez-vous sont pris en soirées ou pendant les week-ends. </p>
<p> <MDBIcon icon="check" size="2x" className="deep-purple-text mr-2" /> Plus de 24% des rendez-vous sont oubliés par les patients. </p> 
<p> <MDBIcon icon="check" size="2x" className="deep-purple-text mr-2" /> Plus de 20% des patients annulent leurs rendez-vous sans prévenir les praticiens.</p>
<p> <MDBIcon icon="check" size="2x" className="deep-purple-text mr-2" /> Plus de 30% des secrétaires se disent débordé(e)s par le flux des patients. </p>      
</div>
 </MDBCol>
    </MDBRow>
    </div>
  );
};
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


export default connect(null,mapDispatchToProps)(InscriptionDoctor);