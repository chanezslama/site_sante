import React from "react";
import {  MDBRow, MDBCol,  MDBMask, MDBIcon, MDBView } from "mdbreact";

const MedecineTherapie = () => {

  return (
    <div className="my-5 px-5 mx-auto">
        <div>
          {/* <p className="display-4 d-flex justify-content-start font-weight-bold green-text my-5">
          Thérapies manuelles
          </p>  */} 

<div className="d-flex mt-3 mb-5 align-items-end"> 
             <h1 className="display-5 font-weight-bold green-text" style={{color:"#00c2c4"}}> Thérapies manuelles </h1> 
             <hr className="text-right green-text" style={{ backgroundColor:'green',height:4,color:'green',width:'800px'}} />
             </div>  

          <MDBRow style={{ fontWeight: 300, maxWidth: "80%",marginLeft:'60px' }}>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://i2.wp.com/www.fiv.fr/media/une-medecine-douce.jpeg?fit=2560%2C1339&ssl=1"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    16/05/2019
                  </p>
                </div>
                <h3 className="font-weight-bold grey-text mb-3 p-0">
                 Introduction 
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                Il existe de nombreuses thérapies manuelles, et la plupart ont le vent en poupe.
                Les plus connues d'entre elles sont, outre la kinésithérapie, l'ostéopathie, l'étiopathie,
                la chiropraxie, la fasciathérapie, le shiatsu et la réflexologie plantaire. Bien qu'elles ne
                 fonctionnent pas toutes selon les mêmes principes (alors que l'ostéopathie se base sur l'anatomie et
                  travaille sur des mouvements subtils, le shiatsu intervient sur les méridiens énergétiques par exemple),
                 la plupart des thérapies manuelles ont une action aussi bien curative que préventive
                 
                </p>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317701/douleurs-chroniques-methodes-douces-pour-eloigner-souffrance.jpg?v1/cover=540x405"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">

                    Douleurs chroniques : 7 méthodes douces pour éloigner la souffrance </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Lorsque la souffrance devient une véritable "maladie", complexe à prendre en charge, 
                      </a>
                      </MDBCol>
                      <a href="#!">
                        Voir <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                       src="http://www.santenaturellemag.com/wp-content/uploads/2014/03/laromatherapie-medecine-douce-pour-votre-bien-etre-700x434.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Connaissez-vous l'étiopathie ? </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Cousine de l'ostéopathie, l'étiopathie est une médecine naturelle qui s'intéresse
                         à la mécanique du corps.
                         Zoom sur la "petite dernière" des thérapies manuelles.  </a>
                      </MDBCol>
                      <a href="#!">
                       Voir <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                         src="https://sf2.viepratique.fr/wp-content/uploads/sites/5/2014/11/chiropracteur.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text"> TMS : soigner les douleurs avec la chiropraxie </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">

                        Tendinites des épaules, syndrome du canal carpien, maladies du coude, lombalgies... 
                        sont les troubles musculo-squelettiques (TMS) les plus répandus.                                          </a>
                      </MDBCol>
                      <a href="#!">
                        Voir <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="http://www.guide-mode-emploi.com/wp-content/uploads/sites/8/2015/10/Capture.png"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    6 conseils pour soulager le mal de dos sans médicament
                                         </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                      
                        La bonne nouvelle si vous souffrez de lombalgie : elle régresse le plus souvent 
                        en quelques jours. En attendant, que faire pour réduire la douleur sans recours aux anti-inflammatoires et retrouver sa mobilité ? Massages,
                         ostéopathie, chiropraxie, plantes… le point sur les solutions naturelles d'un mal de dos.
                       </a>
                      </MDBCol>
                      <a href="#!">
                        Voir <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
  );
}

export default MedecineTherapie;