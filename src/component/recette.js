import React from "react";
import {  MDBRow, MDBCol, MDBCard,  MDBMask, MDBIcon, MDBView } from "mdbreact";
import {  MDBBtn } from "mdbreact";
import RecetteDetox from './recettedetox' 


const Recette = () => {

  return (
   
    <div  className="my-5 px-5 mx-auto" style={{ fontWeight: 300, maxWidth: "90%" }}>  
          <h1 className="display-1 font-weight-bold my-5 text-center" style={{color:" #00c2c4"}}>
Recette santé          </h1>
          <p className="dark-grey-text mx-auto mb-2 w-75 text-center">
          Vous êtes à la recherche de recettes faciles et rapides à cuisiner, 
          pour prendre soin de votre santé ? Voici toutes nos idées de recettes pour vous aider à 
          cuisiner simplement des plats sains et équilibrés pour toute la famille. Du petit-déjeuner au souper, nos chefs ont revisité des recettes classiques
           ou originales pour les transformer en véritable allié santé. 
          </p> 
          <MDBRow> 
              <MDBCol> 
              <section className="text-center my-5">
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half"> 
            <MDBView hover zoom> 
              <img 
                className="view  img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317977/6-recettes-rapides-avec-des-pois-chiches.jpg?v1/cover=500x500"
                alt=""
              /> 

<            MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
            </MDBView> 
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half"> 
           <MDBView hover zoom> 
              <img
               src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317693/les-recettes-qui-font-buzz.jpg?v1/cover=500x500"
               className=" view img-fluid"
                alt=""
              />
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
            </MDBView> 
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
           <MDBView hover zoom> 
              <img
                 src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317585/8-recettes-faciles-avec-des-epinards.jpg?v1/cover=500x500"
                className="img-fluid"
                alt=""
              />
           
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
            </MDBView> 
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
           <MDBView hover zoom> 
              <img
src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317444/chandeleur-recettes-originales-crepes.jpg?v1/cover=500x500"                className="img-fluid"
                alt=""
              />
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
            </MDBView> 
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
              </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5"> 
            <MDBCol md="12" lg="6">
              <div className="mb-2">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Slides/1.jpg"  
                    alt=""
                    style={{height:"350px"}}
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="utensils" className="pr-2" />
                      Culinary
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    RECETTES Simple et Facile 
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!"> Recettes Santé : la cuisine facile et rapide pour garder la forme </a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                Vous avez besoin d'adapter votre alimentaire à cause d'une intolérance (gluten, lactose),
                 d'une maladie (diabète, cholestérol, reflux gastrique…) ou simplement pour perdre quelques kilos. Découvrez dans cette rubrique des recettes équilibrées,
                 adaptées à chaque régime alimentaire, et validées par une nutritionniste
                </p> 
                
<video class="video-fluid z-depth-1 mt-5" autoplay loop controls muted>
  <source src="http://femininppl.videos.prismamediadigital.com/media/811631557001/201709/2595/811631557001_5560712466001_5560705282001.mp4" type="video/mp4" />
</video>

              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315158/green-salade-crabe-celeri-croquant.jpg?v1/cover=500x500"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                    RECETTES DÉTOX
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Pour faciliter une cure détox, faites en sorte
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> 
                    </div> 
                    <RecetteDetox />
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                    RECETTES ANTIOXYDANT

                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Présents naturellement dans de nombreux aliments, les antioxydants sont connus pour                         </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
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
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/2/1312709/bol-riz-choux-fleur-filets-maquereaux-moutard-dijon.jpg?v1/cover=540x405"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                    Recettes antidiabète

                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Les recettes anti-diabète sont habituellement construites autour d'aliments à index glycémique (IG) bas,
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
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
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/4/1314986/filet-cabillaud-salsa-tomates.jpg?v1/cover=540x405"                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                    Recettes anti-cholestérol


                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">                       
                        Comment faire chuter son taux de cholestérol ?                         
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
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
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315153/salade-potiron.jpg?v1/cover=540x405"                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                    Recettes bases calories

                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Préparer des recettes basses calories ne s'improvise pas. Pour être certain de cuisiner léger en toute circonstance,
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
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
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                    Recettes antidiabète

                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="4">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315132/curry-vegetarien-chou-fleur.jpg?v1/cover=540x405"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="font-weight-bold dark-grey-text">
                      Recette riche en fibre 
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        Les fibres alimentaires ne sont autres que des glucides que l'on distingue en deux groupes : les solubles, qui diminuent                         </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow> 



          <MDBRow> 
            <MDBCol md="12"> 
             <div className="d-flex mb-4 align-items-end"> 
             <h1 className="display-3 font-weight-bold" style={{color:" #00c2c4"}}> Entrees </h1> 
             <hr className="text-right" style={{ backgroundColor:'#00c2c4',height:4,color:'#00c2c4',width:'900px'}} />
             </div>
            
             <div className="d-flex">
             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
               src="https://img1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/recettes/tajine-de-saint-jacques-a-l-orange-246205/5666019-1-fre-FR/Tajine-de-Saint-Jacques-a-l-orange.jpg?v1/cover=540x405" /> 
             <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Velouté de salsifis aux moules  </h4> </p>
             </div>  


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/6/1/4/614698/8837700-1/Galettes-vegetales-au-tofu.jpg?v1/cover=540x405"/> 

             <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Galettes végétales au tofu  </h4> </p>
             </div> 

             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315158/green-salade-crabe-celeri-croquant.jpg?v1/cover=540x405"/> 
                <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Green Salade </h4> </p>
             </div> 

             </div> 
             <div style={{marginLeft:"20%"}}>   Voir tous les recettes d'entreés  <MDBIcon icon="angle-double-right" />
             </div>
            </MDBCol>
          </MDBRow> 

          <MDBRow> 
            <MDBCol md="12"> 
            <div className="d-flex mb-4 align-items-end"> 
             <h1 className="display-3 font-weight-bold" style={{color:" #00c2c4"}}> Plats </h1> 
             <hr className="text-right" style={{ backgroundColor:'#00c2c4',height:4,color:'#00c2c4',width:'900px'}} />
             </div>

             <div className="d-flex">
             
             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
               src="https://img1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/recettes/tajine-de-saint-jacques-a-l-orange-246205/5666019-1-fre-FR/Tajine-de-Saint-Jacques-a-l-orange.jpg?v1/cover=540x405" /> 
             <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Tajine de Saint-Jacques à l'orange </h4> </p>
             </div>  


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://static.cuisineaz.com/400x320/i81827-one-pot-pasta-aux-legumes-verts.jpg" />
<MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Pasta et legumes </h4> </p>
             </div> 

             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/recettes/omelette-complete-615946/8741900-1-fre-FR/Omelette-complete.jpg?v1/cover=540x405"/>
                <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Omelette complete </h4> </p>
             </div> 

             </div> 
             <div style={{marginLeft:"20%"}}>   Voir tous les recettes du plats  <MDBIcon icon="angle-double-right" />
             </div>
            </MDBCol>
          </MDBRow>  



          <MDBRow> 
            <MDBCol md="12"> 
            <div className="d-flex mb-4 align-items-end"> 
             <h1 className="display-3 font-weight-bold" style={{color:" #00c2c4"}}> Deserts </h1> 
             <hr className="text-right" style={{ backgroundColor:'#00c2c4',height:4,color:'#00c2c4',width:'900px'}} />
             </div>
             <div className="d-flex">
             
             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/4/1314999/granites-pasteque.jpg?v1/cover=540x405" /> 
        <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Granités de pastèque </h4> </p>
             </div>  


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/6/1/4/614700/8837730-1/Pudding-vegetal-aux-fruits-rouges.jpg?v1/cover=540x405"/> 
             <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Pudding végétal aux fruits rouges </h4> </p>
             </div> 

             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                src="https://img1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/recettes/tiramisu-de-betterave-chioggia-et-agrumes-612383/8703535-1-fre-FR/Tiramisu-de-betterave-chioggia-et-agrumes.jpg?v1/cover=540x405"/> 

          <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir recette </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h4> Tiramisu de betterave chioggia et agrumes </h4> </p>
             </div> 

             </div> 

             <div style={{marginLeft:"20%"}}>   Voir tous les recettes du plats  <MDBIcon icon="angle-double-right" />
             </div>
            </MDBCol>
          </MDBRow> 




          <MDBRow > 
            <MDBCol md="12"> 

           <div className="white-text rgba-cyan-light " style={{height:'300px'}}>
           
           <h1 className="display-2 mt-5 text-center">  Vous allez aimer </h1> 
            <h4 className="display-5 mt-1 text-center"> 50 recettes pour composer votre menu de Pâques </h4>
            </div> 

            <div className="d-flex justify-content-center recette-video" > 
            
            
            
            <div style={{width:'350px'}} className="mr-3 rgba-grey-slight"> 
             <video style={{width:'350px'}} autoplay loop controls muted poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/811631557001/55b73e38-4226-4efa-9fbb-42402fe7c6f9/a1c3c91b-f542-4258-80f5-1debd0359544/480x270/match/image.jpg" src="blob:https://www.femmeactuelle.fr/fb91903b-fb58-46b2-8094-018f802c12f8">
             </video>
             <div className="pt-2 pb-2 text-center "> Un oeuf de Pâques en chocolat à mouler </div>  
            </div>  


            <div style={{width:'350px'}} className="mr-3 rgba-grey-slight"> 
             <video style={{width:'350px'}} autoplay loop controls muted poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/811631557001/55b73e38-4226-4efa-9fbb-42402fe7c6f9/a1c3c91b-f542-4258-80f5-1debd0359544/480x270/match/image.jpg" src="blob:https://www.femmeactuelle.fr/fb91903b-fb58-46b2-8094-018f802c12f8">
             </video>
             <div className="pt-2 pb-2 text-center"> Un oeuf de Pâques en chocolat à mouler </div>  
            </div>  

            <div style={{width:'350px'}} className="rgba-grey-slight"> 
             <video style={{width:'350px'}} autoplay loop controls muted poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/811631557001/55b73e38-4226-4efa-9fbb-42402fe7c6f9/a1c3c91b-f542-4258-80f5-1debd0359544/480x270/match/image.jpg" src="blob:https://www.femmeactuelle.fr/fb91903b-fb58-46b2-8094-018f802c12f8">
             </video>
             <div className="pt-2 pb-2 text-center"> Un oeuf de Pâques en chocolat à mouler </div>  
            </div>  



            </div>

              
            </MDBCol>
          </MDBRow>
          </div> 
      //   </MDBCardBody>
      // </MDBCard>
  );
}

export default Recette;