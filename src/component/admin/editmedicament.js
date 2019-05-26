import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';
import AdminInterface from './adminInterface'

class EditMedicament extends Component {
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
    
    componentDidMount=()=>

    {
        this.setState({
            ...this.props.medicaments.filter(el=>el._id===this.props._id)[0]
        })
    } 

    editmedicament=()=>{

      axios.put(`/editmedicament/${this.props._id}`,{
     
           name:this.state.name,
            forme:this.state.forme,
            utilisation:this.state.utilisation,
            prix:this.state.prix,
            duree:this.state.duree,
            forme:this.state.forme,
            cdi:this.state.cdi,
            presentation:this.state.presentation,
            sousclasse:this.state.sousclasse,
            laboratoire:this.state.laboratoire,
            dossage:this.state.dossage
     
      }).
      then(()=>this.props.editReducermedicament({...this.state})).
      catch((err)=> console.log(err))
    } 

 render ()  { 
  return (<div> 
    <MDBRow> 
      <MDBCol md="3"> 
    <AdminInterface/> </MDBCol>
    <MDBCol md="8"> 
    <MDBContainer className="rgba-cyan-slight py-5"> 
      <MDBRow> 
        <MDBCol md="4" className="align-self-center rounded"> 
        <p className="display-4 px-4 py-3 text-center py-2 font-weight-bold purple-text ">
         Modifier un Medicament </p>    
        </MDBCol>
        <MDBCol md="8">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://previews.123rf.com/images/ismagilov/ismagilov1509/ismagilov150900056/44774392-tas-de-pilules-de-m%C3%A9decine-fond-fabriqu%C3%A9-%C3%A0-partir-de-pilules-color%C3%A9es-et-de-capsules.jpg')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}
          >
            <div className="text-white rgba-black-light py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong> Veuillez entrer les informations du </strong>
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Medicament </strong>
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
              value={this.state.name}
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
              value={this.state.dossage}
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
              value={this.state.forme}
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
              value={this.state.presentation}
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
              value={this.state.cdi}
              id="defaultFormContactNameEx"
              className="form-control" />
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Laboratoire
            </label>
            <input
              type="text"
              name="laboratoire"
              value={this.state.laboratoire}
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
              value={this.state.utilisation}
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
              value={this.state.sousclasse}
              onChange={this.handleChange}
              id="defaultFormContactNameEx"
              className="form-control" /> 

            </MDBCol>  
            <MDBCol md="4"> 
            <label htmlFor="defaultFormContactNameEx" className="purple-text font-weight-bold">
              Duree du conservation
            </label>
            <input
              type="text"
              name="duree"
              value={this.state.duree}
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
              value={this.state.prix}
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
                    onClick={this.editmedicament}
                    className="btn-block z-depth-1"
                  >
                    Modifier Medicament
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

const mapStateToProps=(state)=>
{
    return {
        medicaments:state.medicamentReducer
    }
} 

const mapDispatchToProps = (dispatch) =>{

  return {
    editReducermedicament: (editmedicament) =>{
      return  dispatch({
        type:'EDIT_MEDICAMENT',
        editmedicament
        
      }) 
    }  
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(EditMedicament);