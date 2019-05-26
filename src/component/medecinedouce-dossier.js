import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView } from "mdbreact";

const MedecineDossier = () => {

  return (
    <div className="my-5 px-5 mx-auto">
        <div>
          {/* <p className="display-4 d-flex justify-content-start font-weight-bold green-text my-5">
            Huiles essentiels
          </p>  */}

          <div className="d-flex mt-3 mb-5 align-items-end"> 
             <h1 className="display-5 font-weight-bold green-text" style={{color:"#00c2c4"}}> Huiles essentielles </h1> 
             <hr className="text-right green-text" style={{ backgroundColor:'green',height:4,color:'green',width:'800px'}} />
             </div> 

          <MDBRow style={{ fontWeight: 300, maxWidth: "80%",marginLeft:'60px' }}>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="http://www.canalvie.com/polopoly_fs/1.5852574.1534341969!/image/huilesessentiellesgrossesse.jpg_gen/derivatives/cvlandscape_670_377/huilesessentiellesgrossesse.jpg"
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
                Les huiles essentielles sont de plus en plus reconnues pour leurs bienfaits sur le bien-être et la santé. Mais comment les utiliser ? Retrouvez dans ce guide un lexique complet des huiles essentielles ainsi que leurs indications,
                 leurs propriétés et leurs différents modes d’utilisation.
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
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Les différentes méthodes d’utilisation des huiles essentielles
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Notions essentielles autour des dosages 
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
                       src="https://file1.topsante.com/var/topsante/storage/images/1/3/1/0/1310104/huiles-essentielles-efficaces-aussi-dans-les-produits-beaute_exact1024x768_l.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Les précautions d’emploi des huiles essentielles
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Respecter le dosage des huiles essentielles </a>
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
                         src="https://static.passeportsante.net/i48779-les-personnes-contre-indiquees-a-l-usage-des-huiles-essentielles.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Personnes contre-indiquées à l’usage des huiles essentielles </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Les femmes enceintes (de moins de 3 à 5 mois) ou allaitantes et enfants (de moins de 6 
                        </a>
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
                        src="https://www.123phyto.com/texte/images/huiles-essentielles.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Huile essentielle d'eucalyptus : l'alliée de l'hiver 
                     </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
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

export default MedecineDossier;