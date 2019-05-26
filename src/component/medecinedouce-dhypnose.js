import React from "react";
import {  MDBRow, MDBCol,  MDBMask, MDBIcon, MDBView } from "mdbreact";



const MedecineHypnose = () => {

  return (
    <div className="my-5 px-5 mx-auto">
        <div>
          {/* <p className="display-4 d-flex justify-content-start font-weight-bold green-text my-5">
            Hypnose 
          </p>  */} 
<div className="d-flex mt-3 mb-5 align-items-end"> 
             <h1 className="display-5 font-weight-bold green-text" style={{color:"#00c2c4"}}> Hypnose </h1> 
             <hr className="text-left green-text" style={{ backgroundColor:'green',height:4,color:'green',width:'1000px'}} />
             </div> 

          <MDBRow style={{ fontWeight: 300, maxWidth: "80%",marginLeft:'60px' }}>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover zoom rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="http://hypnose-bouscat.fr/wp-content/uploads/2019/04/hypnose-medecine-douce.png"
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
                L’hypnose, l’autre façon de guérir
 
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                Cette méthode consiste à nous placer dans un état de conscience modifiée pour induire des suggestions positives. Elle peut répondre à de nombreuses problématiques.Loin de celle à laquelle s’adonnent les artistes,
                 l’hypnose thérapeutique occupe une place de plus en plus importante aujourd’hui, 
                 notamment dans l’univers hospitalier. 
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
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/6/1316097/opere-coeur-sans-anesthesie-mais-sous-hypnose.jpg?v1/cover=540x405"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">

                    Opéré du coeur sans anesthésie mais sous hypnose  </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <p href="#!" className="dark-grey-text">
                        un homme de 88 ans a été opéré du coeur. </p>
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
                       src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/1/1311767/perdre-poids-grace-anneau-gastrique-virtuel.jpg?v1/cover=540x405"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Perdre du poids grâce à un anneau gastrique virtuel!   </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        la gastroplastie virtuelle. Réalisée sous hypnose, 
                        elle vise à réapprendre au cerveau à manger moins.  </a>
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
                         src="https://s3-eu-west-1.amazonaws.com/therapeutes-production/ma_sante_images/45/Prix_se_ance_hypnose_pour_maigrir_.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    Maigrir grâce à l'hypnose c'est possible </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">

                        Vous mangez trop, ou trop gras, trop sucré, vous grignotez... Vous le savez, mais malgré tout, pas moyen de vous en empêcher.                        </a>
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
                        src="http://www.autohypnoseduzebre.com/wp-content/uploads/2015/02/pourquoi-auto-hypnose1.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                    L'auto-hypnose, c'est efficace !
                     </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Le principe de l'auto-hypnose consiste à se plonger soi-même dans une transe hypnotique, c'est-à-dire parvenir à accéder à un état de conscience modifié. 
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

export default MedecineHypnose;