import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader,  MDBBtn } from "mdbreact"
import axios from 'axios';

class QuestionCard extends Component {

        deletequestion=()=>{   
            const {questioninfo}=this.props
            const {_id}=questioninfo
         axios.delete(`/deletequestion/${_id}`).
         then(()=>this.props.deleteReducer(_id))
         
        } 
       
 render() { 
    const {questioninfo}=this.props
    const {categorie='',_id,taille,titre,question,poids,traitment}=questioninfo
    return  <MDBCard style={{ width: "30rem", marginTop: "1rem",
            backgroundImage:
              "url('https://previews.123rf.com/images/ismagilov/ismagilov1509/ismagilov150900056/44774392-tas-de-pilules-de-m%C3%A9decine-fond-fabriqu%C3%A9-%C3%A0-partir-de-pilules-color%C3%A9es-et-de-capsules.jpg')",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
          }} 
        className="mr-3 rounded text-left">
    <MDBCardHeader color="pink" className="text-center"> <h5>  <strong> Categorie :{categorie} </strong> </h5> </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText className="text-left  px-2 pink-text">
                <h5> <strong> Titre:</strong> {titre}  </h5> 
                <h5> <strong> taille: </strong>  {taille}</h5> 
                <h5> <strong> Poids: </strong>  {poids} </h5> 
                <h5> <strong> traitment </strong> {traitment} </h5> 
                <h5>  <strong> Question: </strong> {question} </h5> 
                <div className="text-center"> 

      
      <Link to={`/editquestion/${_id}`}>
      <MDBIcon icon="edit" size="2x" className="pink-text m-2"/> 
      </Link> 
     <MDBIcon icon="trash-alt" size="2x" className="pink-text" onClick={this.deletequestion} /> 

     <Link to={`/getreponse/${_id}`}>
      <MDBBtn color="pink" size="2x" className=" m-2"> reponses </MDBBtn>
      </Link>
      </div>
      </MDBCardText> 
    </MDBCardBody>
  </MDBCard>      
    }
}


    const mapDispatchToProps=(dispatch)=>{
        return{
            deleteReducer:(_id)=>{
                dispatch({
                    type:'DELETE_QUESTION',
                    _id
                })
            }
        }
    
    }
    
export default connect(null,mapDispatchToProps)(QuestionCard);





