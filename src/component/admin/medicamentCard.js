import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact'
import {connect} from 'react-redux'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBCardFooter } from
"mdbreact";

class MedicamentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    } 

    deletemedicament=()=>{
        const {medicamentinfo}=this.props
        const {_id}=medicamentinfo
        axios.delete(`/deletemedicament/${_id}`).then(()=>this.props.deleteReducer(_id)).catch((err)=>alert(err))
    }

    render() { 
        const {medicamentinfo}=this.props
        const {name,_id,laboratoire,forme,duree,utilisation,prix,cdi,dossage,sousclasse,presentation}=medicamentinfo
        return (  <MDBCard style={{ width: "30rem", marginTop: "1rem",
            backgroundImage:
              "url('https://img.maxisciences.com/article/480/cerveau/medicament_6f9c15db8c9396c4cf3f125c37227dc4afa140ad.jpg')",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
          }} 
        className="mr-3 rounded text-left">
    <MDBCardHeader color="secondary-color" className="text-center"> <h5>  <strong> Nom :{name} </strong> </h5> </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText className="text-left rgba-pink-light px-2 white-text">
                <h5> <strong> Laboratoire:</strong> {laboratoire}  </h5> 
                <h5> <strong> Forme: </strong>{forme}  </h5>  
                <h5> <strong> Dossage: </strong>  {dossage}</h5> 
                <h5> <strong> Presentation: </strong>{presentation}  </h5> 
                <h5> <strong> DCI: </strong>  {cdi} </h5> 
                <h5> <strong> Duree du conservation : </strong> {duree} </h5> 
                <h5>  <strong> Prix: </strong> {prix} </h5> 
                <h5> <strong> Sous classe:  </strong> {sousclasse} </h5>  
                <div className="text-center">
      <Link to={`/editmedicament/${_id}`}>
              <MDBIcon icon="edit" size="2x" className="purple-text m-2"/> 
              </Link>
             <MDBIcon icon="trash-alt" size="2x" className="purple-text" onClick={this.deletemedicament} />
     
      </div>
      </MDBCardText> 
    </MDBCardBody>
    <MDBCardFooter color="secondary-color"> <strong> Utilisation : </strong> {utilisation} </MDBCardFooter>
  </MDBCard>
       );
    }
} 


const mapDispatchToProps=(dispatch)=>{
    return{
        deleteReducer:(_id)=>{
            dispatch({
                type:'DELETE_MEDICAMENT',
                _id
            })
        }
    }

}

export default connect(null,mapDispatchToProps) (MedicamentCard);