import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom' 
import StepperExample from './inscriptionstepeer'



class InscriptionDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  } 

  // reset=()=>{
  //   this.setState({
  //     nom:'',
  //     prenom:'',
  //     email:'',
  //     telephone:'',
  //     password:'',
  //     adresse:'',
  //     pays:'',
  //     nomconference:''

  //   })
  // }
 
  // adddoctor=()=>{
  //   axios.post('/adddoctor',{...this.state}).
  //   then(res=>{this.props.adddoctorReducer({...this.state});
  //   alert('Mr/Mlle :'+ this.state.nom + this.state.prenom + 'vous etes inscrits ! bienvenus a votre Profil'); 
  //   this.reset()
  //  })
  //   .catch(err=>alert(err))
  // }

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
               
              <MDBRow> 
                <MDBCol> 
                <StepperExample/>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3"> 
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