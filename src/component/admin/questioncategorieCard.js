import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact'
import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody,  MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from "mdbreact"

class QuestionCardCategorie extends Component {

        
       
 render() { 
    const {questioninfo}=this.props
    const {categorie='',_id,taille,titre,question,reponse,poids,traitment}=questioninfo
     
    return ( 
    
    
    <MDBCard style={{ width: "30rem", marginTop: "1rem",
            backgroundImage:
              "url('https://previews.123rf.com/images/ismagilov/ismagilov1509/ismagilov150900056/44774392-tas-de-pilules-de-m%C3%A9decine-fond-fabriqu%C3%A9-%C3%A0-partir-de-pilules-color%C3%A9es-et-de-capsules.jpg')",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
          }} 
        className="mr-3 rounded text-left">
    <MDBCardHeader color="purple" className="text-center"> <h5>  <strong> Categorie :{categorie} </strong> </h5> </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText className="text-left rgba-pink-light px-2 white-text">
                <h5> <strong> Titre:</strong> {titre}  </h5> 
                <h5> <strong> taille: </strong>  {taille}</h5> 
                <h5> <strong> Poids: </strong>  {poids} </h5> 
                <h5> <strong> traitment </strong> {traitment} </h5> 
                <h5>  <strong> Question: </strong> {question} </h5> 
                <div className="text-center"> 

      <Link to={`/repondquestion/${_id}`}>
      <MDBBtn className="pink" color="purple" >  <MDBIcon icon="plus-circle" size="2x" className="white-text m-2"/> ajouter une reponse </MDBBtn>
      </Link>      
      </div>
      </MDBCardText> 
    </MDBCardBody>
    </MDBCard>  )    
    }
}


   
    
export default QuestionCardCategorie;





