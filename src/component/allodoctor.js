import React, { Component } from 'react';
import {MDBRow,MDBCol, MDBBtn} from 'mdbreact'
import {connect} from 'react-redux'
import { MDBCard, MDBCardBody, MDBCardText,MDBIcon,MDBMask,MDBView, MDBCardHeader, MDBCardFooter } from 'mdbreact'
import {Link} from 'react-router-dom' 
import axios from 'axios'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';



class Tel extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() { 
    const {tel,nom,_id}=this.props
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle} color="purple" className="btn-block">Telephone</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}> Telephone du Dr {nom} </MDBModalHeader>
        <MDBModalBody className="text-center grey-text">
          <MDBIcon icon="phone"/> {tel} <br/>

           <p> Si le numéro est injoignable </p>
           <p>  vous pouvez prendre un rendez-vous en ligne  </p>
 
            <Link to={`/rendezvous/${_id}`} className="mt-2">  <MDBBtn color="pink">  reservation </MDBBtn></Link>
        </MDBModalBody>

      </MDBModal>
    </MDBContainer>
    );
  }
}





class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    } 


    render() { 
        const {doctorinfo}=this.props
        const {nom,prenom,specialite,pays,_id,gouvernerat,adresse,formation,fixe,titre,genre,nomconference,delegation,email,password,telephone}=doctorinfo 
        return ( <MDBCard style={{ width: "65rem", marginTop: "1rem"
      }} 
    className="mr-3 rounded text-left">
<MDBCardBody style={{borderTop:'4px solid purple',borderLeft:'4px solid purple'}}>
  <MDBCardText className="text-left  px-2 dark-grey-text"> 
  <MDBRow> 
  <MDBCol md="2">
              <MDBView hover zoom rounded className="rounded-circle z-depth-1-half mb-4">
                <img
                  className="img-fluid rounded-circle"
                  src="https://centrik.in/wp-content/uploads/2017/02/user-image-.png"    
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
            </MDBCol>
      <MDBCol md="6"> 

       <p>  <h4> Dr : <strong>  {nom} {prenom} </strong> </h4> 
            <h6> <strong> Spécialisée {specialite} </strong>  </h6> 
            <h6> <strong>  Diplome du  {formation} </strong> </h6> ...

<h5>  <strong> <MDBIcon icon="map"/>  {gouvernerat} {pays}  </strong> </h5> 
  

       </p>



      {/* <h5> <strong> Nom du medecin :</strong> {nom}  </h5> 
            <h5> <strong> Prenom du medecin : </strong>{prenom}  </h5>  
            <h5> <strong> Specialite: </strong>  {specialite}</h5> 
            <h5> <strong> Telephone Mobile: </strong>{telephone}  </h5> 
            <h5> <strong> Email: </strong>  {email} </h5> 
            <h5> <strong> password: </strong>  {password} </h5> 
            <h5> <strong> Adresse : </strong> {adresse} </h5> 
            <h5>  <strong> pays: </strong> {pays} </h5> 
            <h5> <strong> Gouvernorat:  </strong> {gouvernerat} </h5>  
            <h5> <strong> Delegation:  </strong> {delegation} </h5> 
            <h5> <strong> formation: </strong>  {formation} </h5> 
            <h5> <strong> genre: </strong>  {genre} </h5> 
            <h5> <strong> Tel fixe : </strong> {fixe} </h5> 
            <h5>  <strong> Titre: </strong> {pays} </h5> 
            <h5> <strong> Gouvernorat:  </strong> {gouvernerat} </h5>  
            <h5> <strong> Delegation:  </strong> {delegation} </h5> 
            {nomconference && <h5> <strong> Nom du conference:  </strong> {nomconference} </h5> }  */}

         

</MDBCol> 
 
 <MDBCol md="3" className="d-flex flex-column justify-content-start"> 

<div className="d-flex flex-column justify-content-start">
<Link to={`/fichedoctor/${_id}`}>  <MDBBtn color="purple" className="btn-block mb-2">  Profil</MDBBtn></Link>
<Link to={`/rendezvous/${_id}`}>  <MDBBtn color="purple" className="btn-block mb-2">  Rendez Vous </MDBBtn></Link>
 <Tel tel={telephone} nom={nom} _id={_id} className="mb-2" />
 <MDBBtn  className="btn-block mb-2 mt-2" color="purple"> itinéaire  </MDBBtn> 
</div>

 </MDBCol>

        
  </MDBRow>
         
  </MDBCardText> 
</MDBCardBody>
</MDBCard>
            
        );
    }
}

class AlloDoctor extends Component {
  
    componentDidMount=()=>{

        axios.get('/getdoctor').
        then((res)=>this.props.updatedoctorReducer(res.data)).catch((err)=>alert(err))
       } 

       handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() { 
        const {doctors} = this.props
        return ( <div> 


<MDBView zoom > 
              <div className="d-flex justify-content-center"> 
              <img 
              style={{width:'1000px',height:'430px'}}
              alt='' 
              className="img-fluid"
                src="https://westernnews.media.clients.ellingtoncms.com/img/photos/2018/10/26/doctor_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9" 
                />
              </div>
             <MDBMask className="d-flex flex-column justify-content-center "> 
             <MDBRow> 
             <MDBCol> 
               <h1 className=" text-center font-weight-bolder my-5" style={{color:'#2bbbad'}}>
                   Trouvez un medecin et prenez un rendez-vous en ligne </h1>
               <h4 className="px-3 font-weight-bolder py-3 text-center white-text rgba-black-light w-responsive mx-auto mb-5" style={{maxWidth:'600px'}}>
                   C'est Simple, Immidiat et Gratuit 
                 </h4>  
             </MDBCol>
             </MDBRow>
             <MDBRow className="d-flex justify-content-center">
             <MDBCol md="12">         
            
               <div className="d-flex justify-content-between " style={{width:'900px',marginLeft:'250px'}}>
              <input type="text" placeholder="Nom du medecin"  className="form-control"  onChange={this.handlechange} />
               <select className="browser-default custom-select"
          name="specialite"
         
        >
                                                            <option>Specialite</option>
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
               <select className="browser-default custom-select" 
          name="pays"
         
          >
                                      <option value="tunisie" >Tunisie</option>
                                      <option value="algerie" >Algérie</option>
                                      <option value="maroc" >Maroc</option>
                                      <option value="egypte" >Egypte</option>
                                      <option value="turquie" >Turquie</option>
                                      <option value="arabie saoudite" >Arabie saoudite</option>
                                      <option value="senegal" >Sénégal</option>
                                      <option value="emirates" >Emirats arabes unis</option>
        </select> 
        <select className="browser-default custom-select" 
          name="gouvernerat"
        
          >
                                   <option >Ville</option>
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
               <div className="input-group-append" id="button-addon4">
               <button style={{backgroundColor:'#2bbbad'}} className="btn white-text btn-md  m-0 px-3 py-2 z-depth-0 waves-effect" type="button"> Rechercher </button>
              </div>
              </div>
        </MDBCol>
        </MDBRow>  
        </MDBMask>
        </MDBView> 



    
        <div className="px-5 py-5" style={{margin:'50px'}}> 
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://allodocteur.fr/media/img/docteur-consultation-1.jpg?h=da993015eb344d44d737d339ad32fb30"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            
            <h3 className="font-weight-bold mb-3 p-0">
              <strong> Trouver le médecin qu'il vous faut </strong>
            </h3>
            <h5 className="font-weight-bold mb-3 p-0">
              <strong>  Simple et rapide </strong>
            </h5>
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Simple et rapide
              </h6>
            </a> 

            <p style={{maxWidth:'500px'}}>
            En un clic, accédez à l’agenda d’un spécialiste du domaine médical
             et paramédical trouvé à l’aide de l’outil de recherche. 
             Prenez rendez-vous à tout moment de la journée et évitez les longues périodes 
             d’attente lors d’une prise de rendez-vous classique par téléphone.
             </p>
             <p style={{maxWidth:'500px'}}> 
             100% gratuit pour les particuliers, vos données sont confidentielles et protégées,
              prendre rendez vous n'a jamais été aussi simple...
               Inscrivez vous en quelques secondes et prenez, déplacez, annulez vos rendez vous en toute simplicité 24/24h, 
               7 jours sur 7 en quelques clics.
            </p>
           
            <MDBBtn color="black" size="md" className="waves-light ">
            Prendre rendez-vous
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop:'90px'}}>
          <MDBCol lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
              <strong> Une prise de rendez-vous fiable et efficace </strong>
            </h3>
            <h5 className="font-weight-bold mb-3 p-0">
              <strong>  Confirmation et rappels </strong>
            </h5>
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Confirmation et rappels
              </h6>
            </a> 

            <p style={{maxWidth:'500px'}}>
            Après validation de votre rendez-vous, un mail de confirmation garantit le bon enregistrement de celui-ci,
             le spécialiste que vous avez choisi en est informé directement sur son agenda et en temps réel. 
             Recevez un mail de rappel contenant l’heure et la date de votre rendez-vous, fini les déconvenues !
            </p>
           
           
           <Link to="/poserquestion2"> 
           <MDBBtn color="black" size="md" className="waves-light ">
            Je créé mon compte
            </MDBBtn>
           </Link>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className=" mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://allodocteur.fr/media/img/docteur-consultation-2.jpg?h=982988747ec31ef421bd78fefa17b3c4"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop:'90px'}}>
          <MDBCol lg="5">
            <MDBView className="mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://prendreunrendezvous.fr/img/rendez-vous-medecin.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            
            <h3 className="font-weight-bold mb-3 p-0">
              <strong> Médecins Ce qui va changer pour votre cabinet médical </strong>
            </h3>
            <h5 className="font-weight-bold mb-3 p-0">
              <strong>  Simple et rapide </strong>
            </h5>
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Simple et rapide
              </h6>
            </a> 

          
            <div style={{maxWidth:'600px'}}>
        <b>Moins d’appels téléphoniques</b>, des coûts de secrétariat maitrisés
        <br /><br />
        <b>Moins de rendez vous oubliés</b> grâce au rappel systématique des rendez vous par
        email et SMS.
        <br /><br />
        <b>Vos patients satisfaits</b>, ils peuvent accéder à vos disponibilités, prendre, déplacer,
        annuler leurs rendez vous 24/24h, 7 jours sur 7 en toute simplicité.
        <br /><br />
        <b>Une meilleure visibilité sur Internet</b>, toutes les informations concernant votre
        cabinet sont accessibles en un clic : horaires d’ouverture, conventionnement, types de
        consultation, tarifs, plan d’accès, etc...
        En plus de votre présence sur Prendreunrendezvous.fr, nous créons pour vous un site
        personnalisé à votre nom, afin d’améliorer votre référencement sur Google.<br />
        Augmentez votre patientèle ou permettez à vos patients actuels de vous trouvez plus
        facilement. 
        <br /><br />
        <b>Un agenda en ligne modulable</b>, spécifiquement développé pour les médecins, prenant
        en compte les particularités de chaque spécialité.
      </div>
            <Link to="/adddoctor"> 
            <MDBBtn color="black" size="md" className="waves-light ">
              je m'inscrire gratuit sur E-hygiene
            </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
     
      </div>


     <MDBRow> 
    <MDBCol md="10">
           <MDBRow className="px-5 d-flex flex-wrap justify-content-space-around">
        {doctors.map((el,index)=><Doctor doctorinfo={el} key={index} /> )}   
            
        </MDBRow> 
        </MDBCol>
        </MDBRow>
        </div>
            
        );
    }
}



const mapStateToProps=(state)=>
{
    return {
        doctors:state.doctorReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        updatedoctorReducer:doctors=>
        {
            dispatch({
                type:'UPDATE_DOCTORS',
                doctors
            })
        }
    }
}
 


export default connect(mapStateToProps,mapDispatchToProps)(AlloDoctor);