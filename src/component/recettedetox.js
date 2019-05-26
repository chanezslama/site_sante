import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Documentation1 from './accordinationdetox'
class RecetteDetox extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.toggle}>Voir Plus </MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}   fullHeight position="right">
          <MDBModalHeader toggle={this.toggle}> Recettes détox </MDBModalHeader>
          <MDBModalBody> 
           <div className="d-flex"> 
           
           <img style={{width:'50px',height:'80px'}} src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315161/soupe-carottes-menthe-curcuma.jpg?v1/cover=500x500"  alt="Soupe de carottes menthe-curcuma" />
           <img   style={{width:'50px',height:'80px'}} src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315158/green-salade-crabe-celeri-croquant.jpg?v1/cover=500x500" alt="green salade de crabe au céleri croquant"  />
           <img  style={{width:'50px',height:'80px'}} src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315157/truite-fumee-aux-tagliatelles-concombre.jpg?v1/cover=500x500"  alt="Truite fumée aux tagliatelles de concombre	" />
           <img  style={{width:'50px',height:'80px'}} src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315133/guacamole-fonds-artichauts.jpg?v1/cover=500x500"  alt="guacamole de fonds d'artichauts	" />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default RecetteDetox;