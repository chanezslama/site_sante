import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse,MDBCard, MDBCardBody,MDBView,MDBIcon,MDBMask,MDBCardImage} from "mdbreact";

class Documentation extends Component {
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
            <MDBRow className="d-flex justify-content-center mt-5">
              <MDBCol md="12" xl="8">
                <MDBContainer className="accordion md-accordion accordion-5">
                  <MDBCard className="mb-4">
                    <MDBCol
                      onClick={this.toggleCollapse("collapse1")}
                      tag="h4"
                        className=" p-2 z-depth-1 d-flex justify-content-start align-items-center white-text mr-4"
                        style={{ backgroundColor: "purple"}}
                      >
                        <MDBIcon icon="cloud"  size="1x" className="m-2 "/>  Psychologie
                    </MDBCol>

                    <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                    <MDBCardBody className="rgba-purple-slight">
                    <MDBView className="z-depth-1">
                      <MDBCardImage
                        className="img-fluid z-depth-1"
                        src="https://resize.prod.docfr.doc-media.fr/r/600,600/img/var/doctissimo/storage/images/media/images/commandements-pour-etre-heureux/4373270-1-fre-FR/commandements-pour-etre-heureux.jpg"    
                        alt=""
                      /> 
                      <MDBMask> 
                      <h2 className="font-weight-bold pl-4 pink-text">
                       Etre heureux,
                     </h2>
                    <p className="p-2 white-text">
                    c’est d’abord être bien dans sa tête.
                     Pas toujours facile, surtout face aux aléas de la vie.
                      Dans cette rubrique, des spécialistes du développement personnel vous donnent toutes les clés pour mieux vous connaître, affirmer votre personnalité, ou encore accepter vos 
                    imperfections…Pas simple non plus de se mettre dans la tête de l’un de ses proches
                    </p>
                      </MDBMask>
                    </MDBView> 

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
                        <MDBIcon icon="user"  size="1x" className="m-2 "/> Arrêter de s'inquiéter en 4 étapes

                    </MDBCol>

                    <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                      <MDBCardBody className=" rgba-purple-slight white-text z-depth-1">
                       
                      <MDBView className="z-depth-1">
                      <MDBCardImage
                        className="img-fluid z-depth-1"
                        src="https://amelioretasante.com/wp-content/uploads/2017/12/femme-preocupee.jpg"
                        alt=""
                      /> 
                      <MDBMask > 
                      <h2 className="font-weight-bold py-2 pl-4 pink-text">
                      L’inquiétude
                     </h2>
                     <p className="p-md-4 mb-0">
                     L’inquiétude naît d’un besoin d’anticipation pour essayer de nous protéger et
                      de nous garder en sécurité. Si nous ne pouvons pas l’éliminer complètement, nous pouvons apprendre à la reconnaître,
                      l’accepter, la calmer, et la relativiser grâce à d’autres personnes.
                        </p>                   
                      </MDBMask>
                    </MDBView> 
   
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
                        <MDBIcon icon="user"  size="1x" className="m-2 "/> Tous les bénéfices de la colère
                    </MDBCol>

                    <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                      <MDBCardBody className=" rgba-purple-slight white-text z-depth-1">
                       
                      <MDBView className="z-depth-1">
                      <MDBCardImage
                        className="img-fluid z-depth-1"
                        src="https://i-sam.unimedias.fr/2019/05/10/istock-820449698.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050"
                        alt=""
                      /> 
                      <MDBMask > 
                      <h2 className="font-weight-bold pl-4 pink-text">
                      Tous les bénéfices de la colère  </h2>
                     <p className="p-md-4 mb-0">
                     Péché mortel ou émotion constructive ? Souvent perçue de façon négative, 
                     la colère peut pourtant servir de moteur d’action, et comme signal d’injustice. Apprenez à la prendre en compte, 
                     à la rediriger, et à la transformer en force motivante et positive
                                             </p>                   
                      </MDBMask>
                    </MDBView> 
   
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                 
                  <MDBCard className="mb-4">
                  <MDBCol
                      onClick={this.toggleCollapse("collapse4")}
                      tag="h4"
                        className=" p-2 z-depth-1 white-text d-flex justify-content-start white-text align-items-center mr-4"
                        style={{ backgroundColor: "purple"}}
                      >
                        <MDBIcon icon="user"  size="1x" className="m-2 "/> Comment booster les hormones du bonheur
                    </MDBCol>

                    <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
                      <MDBCardBody className=" rgba-purple-slight white-text z-depth-1">
                       
                      <MDBView className="z-depth-1">
                      <MDBCardImage
                        className="img-fluid z-depth-1"
                         src="https://image.jimcdn.com/app/cms/image/transf/none/path/saf8b2a61e7d5731e/backgroundarea/i5a5e636d3eaecb8d/version/1546300137/image.jpg"
                         alt=""
                      /> 
                      <MDBMask > 
                      <h2 className="font-weight-bold pl-4 pink-text">
                      Comment booster les hormones du bonheur  </h2>
                     <p className="p-md-4 mb-0">
                     
                     Les taux de dopamine, de sérotonine, d’ocytocine, d’œstrogènes et 
                     de progestérone dépendent en partie de nos gènes, et en partie de nos actions. La bonne nouvelle est qu’il existe des moyens très simples 
                     et efficaces pour stimuler ces hormones, comme écouter de la musique.
                                             </p>                   
                      </MDBMask>
                    </MDBView> 
   
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

export default Documentation;