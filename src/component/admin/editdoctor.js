import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import axios from 'axios'
import AdminInterface from './adminInterface'

class Editdoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    handlechange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    } 
   componentDidMount=()=>{
       this.setState({
           ...this.props.doctors.filter(el=>el._id===this.props._id)[0]
       })
   } 

  editdoctor=()=>{
      axios.put(`/editdoctor/${this.props._id}`,{
        nom:this.state.nom,
        prenom:this.state.prenom,
        telephone:this.state.telephone,
        email:this.state.email,
        adresse:this.state.adresse,
        password:this.state.password,
        specialite:this.state.specialite,
        pays:this.state.pays,
        delegation:this.state.delegation,
        gouvernerat:this.state.gouvernerat
      })
      .then(()=>{this.props.editdoctorReducer({...this.state});
      alert('modification reussite')
    })
      .catch((err)=> console.log(err))
  }

    render() {
        return ( <div> 
            <MDBRow> 
      <MDBCol md="3"> 
    <AdminInterface/> </MDBCol>
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
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong> Modification </strong>
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Doctor </strong>
                  </a>
                </h3>
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
              id="defaultFormContactNameEx"
              value={this.state.nom}
              className="form-control"
               />
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
              type="text"
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
          value={this.state.pays}
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
          value={this.state.gouvernerat}
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
          value={this.state.delegation}
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

            <MDBRow className="my-2" id="idconference" > 
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

              <MDBRow className="d-flex mt-4 align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <Link to="/getdoctor"> 
                 <MDBBtn
                    color="purple"
                    rounded
                    type="button"
                    onClick={this.editdoctor}
                    className="btn-block z-depth-1"
                  >
                    Modifier Medecin
                  </MDBBtn>
                  </Link>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
        </MDBRow>
                 </div>
            
        );
    }
}


const mapStateToProps=(state)=>{
    return {
        doctors:state.doctorReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       editdoctorReducer:editdoctor=>{
        dispatch({
            type:'EDIT_DOCTOR',
            editdoctor
        })
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Editdoctor);