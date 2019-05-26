import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { MDBRow,MDBView,MDBCardImage,MDBCol} from 'mdbreact';
import { MDBContainer, MDBBtn, MDBCard,  MDBIcon } from 'mdbreact';

class ProfilDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    componentDidMount=()=>{
        this.setState({
            ...this.props.doctors.filter(el=>el._id===this.props._id)[0]
        }) 
    } 

    render() {
        return (<div> 

<MDBRow className="px-5"> 
<MDBCol md="12" className="py-3 menu rgba-black-strong d-flex justify-content-end "> 
              <Link to={`/espacedoctor/${this.props._id}`} > MonEspace </Link>
              <Link  to={`/profildoctor/${this.props.doctors[0]._id}`} className="ml-5 white-text" > Mon profil </Link>
              <Link  to={`/getquestionbycategorie/${this.state.specialite}/${this.state._id}`} className="ml-5 purple-text " > Mes Question/Reponses </Link>
              <Link to="#"  className=" purple-text ml-5 "  > RDV </Link>
              <Link to="/"  className= "purple-text ml-5" > Se deconnecter </Link>

 
</MDBCol> 

</MDBRow>



<MDBRow className="mt-3 px-5 d-flex justify-content-center">
                  <MDBCol md="8" className="my-5">
                    <h2 className="font-weight-bold mb-3 pink-text">
                     <a> Profil Doctor : {this.state.nom} </a>  
                    </h2>
                    <p>
                    Souvent les antibiotiques sont des composés dérivés de substances isolées dans la nature. 
                    La pénicilline, par exemple, fut découverte par hasard par Sir A. Flemming en 1928 lorsqu'il 
                    voulut comprendre pourquoi les bactéries qu'il cultivait dans son laboratoire étaient mortes. 
                    Il se rendit finalement compte qu'une moisissure du genre Penicillinum 
                    fabriquant naturellement la pénicilline s'était introduite dans ses boîtes de culture !
                    </p>
                  
                  </MDBCol>
                  <MDBCol md="2" className="mt-3 pt-2" className="rounded-circle">
                    <MDBView className="z-depth-1" className="rounded-circle"> 
                      <MDBCardImage
                        className="img-fluid rounded-circle z-depth-1"
                           src="data:image/png;base64,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"
                          alt=""
                      />
                    </MDBView>
                  </MDBCol>
                </MDBRow> 
                <MDBRow className="px-5">  

        </MDBRow> 
         <MDBRow className="d-flex  px-5 justify-content-center"> 
         <MDBCol md="7">
          <MDBCard className="card-image" >
            <div className="text-white rgba-purple-slight py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Modifier mes informations </strong>
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
          </form> 

              <MDBRow className="d-flex mt-4 align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                 <MDBBtn
                    color="purple"
                    rounded
                    type="button"
                    onClick={this.editdoctor}
                    className="btn-block z-depth-1"
                  >
                    Modifier Medecin
                  </MDBBtn>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
                <MDBCol md="5">    
                 <MDBContainer>   
                <MDBRow>
        <MDBCol md="10">
          <MDBCard  className="card-image">
            <div className="text-white rgba-purple-slight py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-2 mt-4 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Modifier mon mot de passe ? </strong>
                  </a> 
                </h3> 
              </div>
             
              <form>
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
              <MDBIcon icon="lock" />
              </div>
            </div> 
            <input id="password1" name="password1" type="password"  placeholder="Nouveau mot de passe " required="required" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-lock" />
              </div>
            </div> 
            <input id="password" name="password" placeholder="confirmation du nouveau mot de passe" type="text" required="required" className="form-control" />
          </div>
        </div>
        
      </form>

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="purple"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                  >
                    mettre à jour 
                  </MDBBtn>
                </div>
              </MDBRow> 
           
             
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                    
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfilDoctor);
