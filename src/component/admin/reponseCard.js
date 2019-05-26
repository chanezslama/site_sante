import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { MDBCard, MDBIcon, MDBCardTitle, MDBCardBody, MDBCardText, MDBCardFooter, MDBCardHeader } from 'mdbreact';
class ReponseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    } 

    deletereponse=()=>{   
        const {reponseinfo}=this.props
        const {_id}=reponseinfo
     axios.delete(`/deletereponse/${_id}`).
     then(()=>this.props.deleteReducer(_id))
     
    } 
    render() {
        const {reponseinfo}=this.props
        const {titre,question,_id, reponse,email_medein,prenom_medein,nom_medecin}=reponseinfo
        return (<div> 
             <MDBCard  className="rounded mr-3 white-text text-left" style={{width:'25em'}} >
             <MDBCardHeader color="blue"> <h6> Titre du Question : {titre} </h6> </MDBCardHeader>
             <MDBCardTitle className="text-center blue-text py-3"><h6> Question : {question} </h6> </MDBCardTitle>
            <MDBCardBody> 
            <MDBCardText className="dont-weight">
            <h6> Nom du medecin : {nom_medecin} </h6> 
            <h6> Prenom du medecin {prenom_medein} </h6> 
            <h6> Email du medecin : {email_medein} </h6> 

            <Link to={`/editreponse/${_id}`}>
      <MDBIcon icon="edit" size="2x" className="pink-text m-2"/> 
      </Link> 
     <MDBIcon icon="trash-alt" size="2x" className="pink-text" onClick={this.deletereponse} /> 

                </MDBCardText>
            </MDBCardBody>
             <MDBCardFooter color="blue"> 
             <h6>  La Reponse : {reponse} </h6> 

             </MDBCardFooter>
             </MDBCard>

       
       
        </div>
            
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deleteReducer:(_id)=>{
            dispatch({
                type:'DELETE_REPONSE',
                _id
            })
        }
    }

}

export default connect(null,mapDispatchToProps)(ReponseCard);