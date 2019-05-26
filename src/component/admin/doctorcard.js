import React, { Component } from 'react'; 
import { MDBCard, MDBCardBody, MDBCardText,MDBIcon, MDBCardHeader, MDBCardFooter } from 'mdbreact'
import axios from 'axios' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Doctorcard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    } 

    deletedoctor=()=>{
        const {doctorinfo}=this.props
        const {_id}=doctorinfo
        axios.delete(`/deletedoctor/${_id}`).
        then(()=>this.props.deletedoctorReducer(_id)).catch((err)=>alert(err))
    }

    render() { 
        const {doctorinfo}=this.props
        const {nom,prenom,specialite,pays,_id,gouvernerat,adresse,nomconference,delegation,email,password,telephone}=doctorinfo 
        return ( <MDBCard style={{ width: "30rem", marginTop: "1rem"
      }} 
    className="mr-3 rounded text-left">
<MDBCardHeader color="secondary-color" className="text-center"> <h5>  <strong> Nom :{specialite} </strong> </h5> </MDBCardHeader>
<MDBCardBody>
  <MDBCardText className="text-left  px-2 pink-text">
            <h5> <strong> Nom du medecin :</strong> {nom}  </h5> 
            <h5> <strong> Prenom du medecin : </strong>{prenom}  </h5>  
            <h5> <strong> Specialite: </strong>  {specialite}</h5> 
            <h5> <strong> Telephone: </strong>{telephone}  </h5> 
            <h5> <strong> Email: </strong>  {email} </h5> 
            <h5> <strong> password: </strong>  {password} </h5> 
            <h5> <strong> Adresse : </strong> {adresse} </h5> 
            <h5>  <strong> pays: </strong> {pays} </h5> 
            <h5> <strong> Gouvernorat:  </strong> {gouvernerat} </h5>  
            <h5> <strong> Delegation:  </strong> {delegation} </h5>  
            {nomconference && <h5> <strong> Nom du conference:  </strong> {nomconference} </h5> } 

            <div className="text-center">
      <Link to={`/editdoctor/${_id}`}> <MDBIcon icon="edit" size="2x" className="purple-text m-2"/>  </Link>
       <MDBIcon icon="trash-alt" size="2x" className="purple-text" onClick={this.deletedoctor} />
     
  </div>
  </MDBCardText> 
</MDBCardBody>
<MDBCardFooter color="secondary-color"> <strong> Utilisation : </strong>  </MDBCardFooter>
</MDBCard>
            
        );
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
       deletedoctorReducer:_id=>{

        dispatch({
            type:'DELETE_DOCTOR',
            _id
        })
    }
    }
}
export default connect(null,mapDispatchToProps)(Doctorcard);