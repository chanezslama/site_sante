import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'
import {MDBIcon } from "mdbreact"; 
import {  MDBRow, MDBCol, MDBCard, MDBBtn } from "mdbreact";
import MultiCarouselPage from './carouselleaffichage'

class Question extends Component {
    constructor(props) { 
        super(props);
        this.state = {  };
    }
    render() {
        return (<div> 

<MDBRow  style={{height:'1400px'}}>
      <MDBCol md="12" className="mb-4">
        <MDBCard 
          className="card-image"
          style={{
            backgroundImage:
              "url(https://www.mediacites.fr/wp-content/uploads/2018/05/Me%CC%81decine-du-travail.jpg)",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover'              
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-light py-5 px-4 rounded">
            <MDBCol md="6"> 
              <p  style={{marginTop:'100px'}} > </p>
              <h1 className="py-3 font-weight-bold">
                <strong>Doute, inquiétude,<br/>
                  Besoin d’un conseil santé ?</strong>
              </h1>  <p className="purple-text" style={{fontSize:'16px'}}> Posez votre question médicale en ligne !</p>
              <p className="pb-3 px-5" style={{fontSize:'18px'}}>
                Des centaines des particiens inscrits au tableau d'ordre des medecins prets a 
                vous aider dans les plus brefs delais ...
                
              </p> 
              <MDBBtn color="purple"  rounded size="md">
                <MDBIcon  icon="plus" className="left mr-2" size="2x" /> <Link to="/poserquestion" className="white-text"> Poser Question </Link> 
              </MDBBtn> 
              <MDBBtn color="cyan" rounded size="md">
                <MDBIcon  icon="search" className="left mr-2" size="2x" /> <Link to="/trouverquestion" className="white-text"> Rechercher une reponse </Link> 
              </MDBBtn> 
              <p  style={{marginTop:'100px'}} > </p>
            </MDBCol> 
            <MDBCol md="6">  
            <MultiCarouselPage/>
            </MDBCol> 
          </div>
        </MDBCard>
      </MDBCol>      
      </MDBRow> 
        </div>
            
        );
    }
}

export default Question;