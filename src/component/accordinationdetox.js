import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse,MDBCard, MDBCardBody,MDBIcon} from "mdbreact";

class Documentation1 extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
    return (
      <MDBContainer>
            <MDBRow className="d-flex justify-content-center mt-2">
              <MDBCol md="12" xl="8">
                <MDBContainer className="accordion md-accordion accordion-5">
                  <MDBCard className="mb-4">
                    <MDBCol
                      onClick={this.toggleCollapse("collapse1")}
                      tag="h4"
                        className=" p-2 z-depth-1 d-flex justify-content-start align-items-center white-text mr-4"
                        style={{ backgroundColor: "purple"}}
                      >
                        <MDBIcon icon="cloud"  size="1x" className="m-2 "/>  INTRODUCTION

                    </MDBCol>

                    <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-strong white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                        
                        Pour faciliter une cure détox, faites en sorte de soulager votre système digestif en limitant la consommation de produits laitiers (et surtout de lait de vache), de produits raffinés (sucre blanc, produits cuisinés…), de graisses saturées et de sel. Privilégiez également la cuisine végétarienne. 
                        De plus, buvez de l’eau régulièrement, surtout en dehors des repas.
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>

                  <MDBCard className="mb-4">

                  <MDBCol
                      onClick={this.toggleCollapse("collapse2")}
                      tag="h4"
                        className=" p-2 z-depth-1 white-text d-flex justify-content-start white-text align-items-center mr-4"
                        style={{ backgroundColor: "purple"}}
                      >
                        <MDBIcon icon="user"  size="1x" className="m-2 "/> PRINCIPAUX ALIMENTS ET ASTUCES

                    </MDBCol>

                    <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-strong white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                       
                        Pour préparer des recettes détox, il faut miser sur des ingrédients spécifiques connus pour leurs vertus détoxifiantes dans l'organisme. Généralement, ils agissent sur le foie et l'aide à mieux trier les nutriments de l'organisme. C'est notamment le cas de la fibre d'ananas, qui a en plus la particularité d'être brûle-graisse, mais aussi divers légumes riches en fibres à l'instar du chou, du radis noir, de la betterave ou du fenouil. 
On conseille également de boire du thé régulièrement de façon à détoxifier le corps. Il faut néanmoins prendre garde à ne pas trop en consommer, 
car la théine empêche le fer de bien se fixer dans le sang.
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>

                  <MDBCard className="mb-4">
                   
                  <MDBCol
                      onClick={this.toggleCollapse("collapse3")}
                      tag="h4"
                      className=" p-2 z-depth-1 white-text d-flex justify-content-start white-text align-items-center mr-4"
                      style={{ backgroundColor: "purple"}}
                      >
                        <MDBIcon icon="gift"  size="1x" className="m-2"/>  Horaires et tarif
                    </MDBCol>

                    <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-strong white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
        
      </MDBContainer>
    );
  }
}

export default Documentation1;