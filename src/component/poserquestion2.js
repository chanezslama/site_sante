import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard,  MDBIcon } from 'mdbreact';

class ComptePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        
  return (
    <MDBContainer className="px-5">
      <MDBRow className="m-5"> 
      <MDBCol>  
           <h1 className="text-center purple-text display-5">  
                     Particuliers, prenez rendez vous avec le professionnel de votre choix
</h1>
      </MDBCol>
      </MDBRow>
      <MDBRow> 
        <MDBCol md="5"> 
           <p> Vous avez déjà utilisé  E-hygiene, connectez-vous à votre compte </p> 
           <h4 className="mb-3 font-weight-bolder pink-text"> Accédez à votre compte </h4>
          <AutehntificationPatient/>
        </MDBCol>
        <MDBCol md="7"> 
           <p> Vous n'avez pas encore de compte, il vous suffit d'en créer un, c’est rapide, confidentiel et gratuit
           </p> <h4 className="mb-3 font-weight-bolder pink-text">  Créer un compte </h4>
          <MDBCard  className="card-image">
            <div className="text-white rgba-purple-slight py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-2 mt-4 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Nouveau sur E-hygiene ? </strong>
                  </a> 
                </h3> 
                <p> Merci de saisir vos informations </p>
              </div>
             
              <form>
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
              <MDBIcon icon="user" />
              </div>
            </div> 
            <input id="name" name="name" placeholder="Taper votre Nom" type="text" required="required" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
               <MDBIcon icon="user" />
              </div>
            </div> 
            <input id="prenom" name="prenom" placeholder="Taper votre prenom" type="text" required="required" className="form-control" />
          </div>
        </div> 
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-phone" />
              </div>
            </div> 
            <input id="phone" name="phone" type="phone"  placeholder="taper votre telephone" aria-describedby="phoneHelpBlock" required="required" className="form-control" />
          </div> 
        </div> 
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
               <MDBIcon icon="clock" />
              </div>
            </div> 
            <input id="date" name="date" type="date" aria-describedby="phoneHelpBlock"  placeholder="taper votre date de naissance" required="required" className="form-control" />
          </div> 
        </div> 
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-phone" />
              </div>
            </div> 
            <input id="adresse" name="adresse" type="text"  placeholder="taper votre adresse" aria-describedby="phoneHelpBlock" required="required" className="form-control" />
          </div> 
        </div> 
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
              <MDBIcon icon="envelope" />
              </div>
            </div> 
            <input id="email" name="email" type="email"  placeholder="taper votre email" required="required" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label /> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-lock" />
              </div>
            </div> 
            <input id="password" name="password" placeholder="taper votre password" type="text" required="required" className="form-control" />
          </div>
        </div>
        
      </form>


              <div className="md-form pb-3"> 
                <div className="form-check my-4">
                En cliquant sur «Soumettre», vous acceptez les CGU ainsi que la charte de site med.tn

                </div>
              </div>
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="purple"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                  >
                    soumettre
                  </MDBBtn>
                </div>
              </MDBRow> 
              
             
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

} 

export default ComptePatient;

const AutehntificationPatient=()=>{

  return    <MDBContainer className="d-flex justify-content-center">
  <MDBCard  className="card-image">
    <div className="text-white rgba-purple-slight py-5 px-5 z-depth-4">
      <div className="text-center">
        <h3 className="white-text mb-2 mt-4 font-weight-bold">
          <a href="#!" className="purple-text font-weight-bold">
            <strong> Connexion sur E-hygiene ? </strong>
          </a> 
        </h3> 
      </div>
     
      <form>

<div className="form-group">
  <label /> 
  <div className="input-group">
    <div className="input-group-prepend">
      <div className="input-group-text">
      <MDBIcon icon="envelope" />
      </div>
    </div> 
    <input id="email" 
    name="email" 
    type="email" 
     placeholder="taper votre email"
      required="required"
       className="form-control" />
  </div>
</div>
<div className="form-group">
  <label /> 
  <div className="input-group">
    <div className="input-group-prepend">
      <div className="input-group-text">
        <i className="fa fa-lock" />
      </div>
    </div> 
    <input id="password"
       name="password" 
       placeholder="taper votre password"
      type="password" 
      required="required"
       className="form-control" />
     </div>
      </div>              
     </form> 
     <MDBRow className="d-flex align-items-center mb-4">
        <div className="text-center mb-3 col-md-12">
         <MDBBtn
            color="purple"
            rounded
            type="button"
            className="btn-block z-depth-1"
          >
            connexion
          </MDBBtn>
        </div>
      </MDBRow>    
    </div>
  </MDBCard>
</MDBContainer>
}