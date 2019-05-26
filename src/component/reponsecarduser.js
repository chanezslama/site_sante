import React, { Component } from 'react'; 
import {MDBCol,MDBRow, MDBFooter} from 'mdbreact'
import { MDBCard,MDBCardTitle,MDBCardHeader, MDBCardBody, MDBCardText,  } from 'mdbreact';
import {connect} from 'react-redux'
import axios from 'axios'

class Reponse2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    } 
 
       componentDidMount=()=>{

        axios.get(`/getreponse`).
        then((res)=>{this.props.updatereponseReducer(res.data.filter(el=>el._id===this.props._id))
            

        }
            )


       }

        
    render() {

        return (<>
          

      <MDBRow className="px-5 d-flex justify-content-center"> 
      <MDBCol md="8"> 
     { this.props.reponses.map((el,i)=>
       
     <MDBCard  className="rounded m-3 white-text text-left" style={{width:'40em',borderRadius:'18px'}} >
             <MDBCardHeader color="blue"> <h6> Titre du Question : {el.titre} </h6> </MDBCardHeader>
             <MDBCardTitle className="text-center blue-text py-3"><h6> Question : {el.question} </h6> </MDBCardTitle>
            <MDBCardBody> 
            <MDBCardText className="dont-weight d-flex">

    <MDBCol md="4" className="mx-auto">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzEfgpFZgok3ov95r_dbthnJifJyE0K-Wkfrulp0NKsudL2FwiA"
      alt=""
      className="rounded-circle z-depth-1 img-fluid"
    />
        </MDBCol>     
        <MDBCol md="8"> 
            <h6> Doctor : {el.nom_medecin} </h6> 
            <h6> Prenom du medecin : {el.prenom_medein} </h6> 
             <h6>   specialite : {el.email_medein}  </h6>
            <h6> Email du medecin : {el.email_medein} </h6> 

            <p> Diplômé en tant que sexologue clinicien de la faculté de médecine
                 EBN ELJAZZAR Sousse .Traitement du dysfonctionnement érectile Traitement de l'éjaculation...
           </p> 
       </MDBCol>       
       </MDBCardText> 
            </MDBCardBody>
            <MDBFooter color="blue" className="px-3"> 
          <h6 >  La Reponse : {el.reponse} </h6> 
            </MDBFooter>
             </MDBCard> )} 
    
    </MDBCol> 
    <MDBCol md="4"> 

    </MDBCol>
    
    
     </MDBRow> 
        
        
        
        
          











        </>);
    }
}


const mapStateToProps=(state)=>
{
    return {
        reponses:state.reponseReducer,
        doctors:state.doctors
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updatereponseReducer:reponses=>
        {
            dispatch({
                type:'UPDATE_REPONSE',
                reponses
            })
        },
        updatedoctorReducer:doctors=>
        {
            dispatch({
                type:'UPDATE_DOCTORS',
                doctors
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Reponse2); 



