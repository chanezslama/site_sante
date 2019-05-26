import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'; 
import AdminInterface from './adminInterface'

class AddMedicament extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    } 

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }   

    addmedicament=()=>{

      axios.post('/addmedicament',{...this.state}).then(()=>this.props.onAddMedicament({...this.state})).
      catch((err)=> console.log(err))
    } 

    
 


 render ()  { 
  return (<div> 
    <MDBRow> 
      <MDBCol md="3"> 
    <AdminInterface/> </MDBCol>
    <MDBCol md="10"> 
    <MDBContainer className="rgba-cyan-slight py-5"   style={{
              backgroundImage:
                "url('https://previews.123rf.com/images/ismagilov/ismagilov1509/ismagilov150900056/44774392-tas-de-pilules-de-m%C3%A9decine-fond-fabriqu%C3%A9-%C3%A0-partir-de-pilules-color%C3%A9es-et-de-capsules.jpg')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}> 
      <MDBRow> 
        <MDBCol md="4" className="align-self-center rounded"> 
        <p className="display-4 px-4 py-3 text-center py-2 font-weight-bold purple-text ">
         Ajouter un Medicament </p>    
        </MDBCol>
        <MDBCol md="8">
          <MDBCard className="card-image">
            <div className="text-white rgba-purple-slight py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong>  <strong> Veuillez entrer les informations du </strong> Medicament </strong>
                  </a>
                </h3>
              </div>
           

              <form className="text-left">
             <MDBRow className="my-2" >  
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
             Nom Commercial  
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
             Dossage
            </label>
            <input
              type="text"
              name="dossage"
              onChange={this.handleChange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
             <MDBRow className="my-2" > 
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
               Forme  
             </label>
            <input
              type="text"
              name="forme"
              onChange={this.handleChange}
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Presentation
            </label>
            <input
              type="text"
              name="presentation"
              onChange={this.handleChange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
             <MDBRow className="my-2" > 
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              DCI
            </label>
            <input
              type="text"
              onChange={this.handleChange} 
              name="cdi"
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Laboratoire
            </label>
            <input
              type="password"
              name="laboratoire"
              onChange={this.handleChange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
              <MDBRow className="my-2"> 
                  <MDBCol md="12"> 
                  <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Utilisation
            </label>
            <input
              type="text"
              name="utilisation"
              onChange={this.handleChange}
              id="defaultFormContactSubjectEx"
              className="form-control"
            /> 
            </MDBCol>
            </MDBRow> 

            <MDBRow className="my-2" > 
             <MDBCol md="4">   
             <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Sous Classe
            </label>
            <input
              type="email"
              name="sousclasse"
              onChange={this.handleChange}
              id="defaultFormContactNameEx"
              className="form-control" /> 

 


            </MDBCol>  
            <MDBCol md="4"> 
            <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Duree du conservation
            </label>
            <input
              type="password"
              name="duree"
              onChange={this.handleChange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             <MDBCol md="4"> 
             <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Prix
            </label>
            <input
              type="text"
              name="prix"
              onChange={this.handleChange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol> 
             </MDBRow>

          </form> 

             
              <MDBRow className="d-flex mt-5 align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                   <Link to="/getmedicament"> 
                  
                  <MDBBtn
                    color="purple"
                    rounded
                    type="button" 
                    onClick={this.addmedicament}
                    className="btn-block z-depth-1"
                  >
                    Ajouter Medicament
                  </MDBBtn> 
                  </Link>
                  
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

const mapDispatchToProps = (dispatch) =>{

  return {
    onAddMedicament: (newmedicament) =>{
      return  dispatch({
        type:'ADD_MEDICAMENT',
        newmedicament
      }) 
    }  
  }
} 

export default connect(null,mapDispatchToProps) (AddMedicament);