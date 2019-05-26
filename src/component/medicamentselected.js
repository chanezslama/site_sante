import React, { Component } from 'react';
import {MDBMask,MDBView,MDBBtn,MDBCardFooter,MDBCard} from 'mdbreact'

const image1='https://cache.magazine-avantages.fr/data/photo/w1000_ci/5b/antibiotiques-medicament-sante.jpg'
const image2='https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2018.2F06.2F04.2F2b1b41a3-b17f-4f58-90b4-888a01647815.2Ejpeg/750x375/background-color/ffffff/quality/70/humex-doliprane-vicks-bientot-des-boites-de-medicament-neutres-ansm-afipa-vente-libre-automedication-1291035.jpg'
const image4='https://fr.cdn.v5.futura-sciences.com/buildsv6/images/largeoriginal/f/0/f/f0f23bae5e_50021513_pilules-paknyushcha-shutterstock.jpg'
const image3='https://fr.ajeshashok.com/images/zdorove/analog-citramona-instrukciya-i-cena_4.jpg'
class MedicamentCard extends Component {
    
    render() { 

        const {medicamentinfo}=this.props
        const {name,_id,image='https://i-sam.unimedias.fr/2018/12/12/antibiotiques.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=227&w=405',laboratoire,forme,duree,utilisation,prix,cdi,dossage,sousclasse,presentation}=medicamentinfo
        return ( 
        <MDBCard  style={{width:'400px'}} className="rounded ml-4 mt-4">     
         <MDBView zoom > 
          <img  style={{height:'150px',width:'400px'}}
          src={ sousclasse==='cholesterol' ? image2 : sousclasse==='ANTALGIQUE'? image : sousclasse==='antibiotique'? image1 :image4}/> 
          <MDBMask className="d-flex align-items-start " > 
          <div className="text-white text-left rgba-pink-strong px-2">              
              <h5 className="py-2 white-text font-weight-bold">
              Sous classe : {sousclasse} 
              </h5>    
          </div>
          </MDBMask> 
          </MDBView> 
          <div className="py-3 px-3 white-text d-flex justify-content-around" style={{backgroundColor:'pink',height: '60px'}}>
         <h6>  Nom : {name} </h6> <h6> <strong> Forme: </strong>{forme}  </h6> </div> 
          <div className="py-3 px-2 d-flex justify-content-around  white-text bg-light " style={{backgroundColor:'#14B9D5',height: '50px'}}>
         <h6>  <stong> Laboratoire:  </stong> {laboratoire} </h6> <h6> <strong> Dossage: </strong>  {dossage}</h6> 
         </div> 
         <p className="dark-grey-text  px-3 d-flex flex-column text-left py-3 "> 
                <h6> <strong> Presentation: </strong>{presentation}  </h6> 
                <h6> <strong> Duree du conservation : </strong> {duree} </h6> 
                </p> 
        <div className="py-3 px-2 d-flex justify-content-around  white-text bg-light" style={{backgroundColor:'#14B9D5',height: '50px'}}> 
        <h6>  <strong> Prix: </strong> {prix} </h6> 
        <h6> <strong> DCI: </strong>  {cdi} </h6> 
        </div>        
        
    <MDBCardFooter color="pink" className="" style={{width:'400px'}}> 
      utilisation : {utilisation}
     </MDBCardFooter>     
    </MDBCard> 
            
        );
    }
} 

export default MedicamentCard