import React, { Component } from 'react'; 
import {MDBMask,MDBBtn,MDBIcon} from 'mdbreact'
import {MDBCardBody,MDBCardImage,MDBCol,MDBView,MDBRow} from 'mdbreact'
import {  MDBCollapse } from "mdbreact";
import axios from 'axios'
import MedicamentCard from './medicamentselected'
class Medicament extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapseID: "",
            name:'',
            medicamentfilter:[],
            medicamentAntibiotique:[],
            medicamentAnticholestirole:[],
            medicamentAnalogique:[],
            medicamentAntihistaminiques:[]
         };
    } 

    handlechange=(event)=>{
     this.setState({
        [event.target.name]:event.target.value  }) }

    getmedicament=()=>{
        axios.get(`/getmedicament`).
        then(res=>this.setState({medicamentfilter:res.data.filter((el)=>el.name===this.state.name.trim())})) 
            .catch((err)=>alert(err)) 
    }  
     
     componentDidMount=()=>{
            axios.get(`/getmedicamentbysousclasse/antibiotique`).
            then(res=> this.setState({medicamentAntibiotique:res.data})
              ).catch((err)=>alert(err)) 

          axios.get(`/getmedicamentbysousclasse/cholesterol`).
          then(res=> this.setState({medicamentAnticholestirole:res.data})
                ).catch((err)=>alert(err)) 


                axios.get(`/getmedicamentbysousclasse/ANTALGIQUE`).
                then(res=> this.setState({medicamentAnalogique:res.data})
                      ).catch((err)=>alert(err)) 
               
            axios.get(`/getmedicamentbysousclasse/antihistaminiques`).
             then(res=> this.setState({medicamentAntihistaminiques:res.data})).catch((err)=>alert(err))        
     }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
      

    render() {
        return (<div> 
             <MDBView zoom > 
              <div style={{marginLeft:'200px'}}> 
              <img 
              style={{width:'860px',height:'300px'}}
              alt='' 
              src='https://www.vulgaris-medical.com/sites/default/files/styles/big-lightbox/public/field/image/actualites/2013/08/07/vente-de-medicaments-sur-internet-gare-l-arnaque.jpg?itok=g1eaocPj'/>
              </div>
             <MDBMask className="d-flex align-items-end"> 
             <p className="px-3 py-3 m-5 white-text rgba-purple-strong" style={{maxWidth:'800px'}}> 
             <h3 className="mt-2 font-weight-bold px-5">
                <strong> Quelle maison n’a pas sa trousse à pharmacie ?</strong>
              </h3>
             Bienvenue sur le Guide des médicaments du Journal du E-hygiyene. Ce service vous permet d'obtenir des informations détaillées sur plus de 17 000 médicaments, qu'il s'agisse de médicaments
              prescrits par un médecin ou de médicaments disponibles sans ordonnance.
               </p> 
             </MDBMask>
             </MDBView> 

          <MDBRow className="d-flex justify-content-center">
          <MDBCol md="12">         
            <div className="cyan-text m-4 d-flex justify-content-center align-items-center">
              <input 
                name="name"
                type="text"
                className="cyan-text"
                onChange={this.handlechange} 
                style={{width:'300px',border:'2px solid #2bbbad'}}
                />  
              <MDBBtn onClick={this.getmedicament} className="">
               <MDBIcon icon="search" className="mr-3" />  rechercher </MDBBtn>
            </div>
         
        </MDBCol> 
        </MDBRow>   
        <MDBRow className="px-5">  
            <div className="d-flex"> 
            {this.state.medicamentfilter.map((el,index)=><MedicamentCard medicamentinfo={el} key={index} />)}
        </div>
        </MDBRow> 
 
      <MDBRow className="m-4" > 
      <MDBCol md="3" className="md-0 mb-4">
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src="http://blog-sante.info/wp-content/uploads/2016/11/pilules-et-antibiotiques.jpg" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">

              <a  onClick={this.toggleCollapse("basicCollapse")} > Antibiotiques </a>    </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol> 
      <MDBCol md="3" className="md-0 mb-4">
         <MDBView zoom > 
          <img  style={{height:'300px'}}
          src="http://www.psychomedia.qc.ca/image/2018-03/38681-64132-image"/> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="white-text text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold " >
              <a onClick={this.toggleCollapse("basicCollapse1")} >  Médicaments anti-cholestérol  </a>       

              </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol> 

     
      <MDBCol md="3" className="md-0 mb-4">
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src="https://previews.123rf.com/images/buhta/buhta1712/buhta171200031/91180082-prescription-m%C3%A9dicamenteuse-pour-m%C3%A9dicaments-de-traitement-m%C3%A9dicament-pharmaceutique-cure-en-r%C3%A9cipient-pour-.jpg" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">
              <a onClick={this.toggleCollapse("basicCollapse2")} >   Médicaments anti-histaminiques </a>
              </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol>  
      <MDBCol md="3" className="md-0 mb-4 ">
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fcontent.2Fuploads.2F2018.2F08.2Ftraitement-hypertension.2Ejpg/748x372/quality/90/crop-from/center/hypertension-un-nouveau-medicament-plus-efficace.jpeg" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">
              <a onClick={this.toggleCollapse("basicCollapse3")} >   Antalgiques </a> </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol> 
    
    </MDBRow> 

        


<MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>           
          <MDBCardBody>
          <MDBRow className="my-4 px-5 d-flex justify-content-center">
                  <MDBCol md="8">
                    <h2 className="font-weight-bold mb-3 pink-text">
                     <a> Medicament Antibiotique  </a>  
                    </h2>
                    <p>
                    Souvent les antibiotiques sont des composés dérivés de substances isolées dans la nature. 
                    La pénicilline, par exemple, fut découverte par hasard par Sir A. Flemming en 1928 lorsqu'il 
                    voulut comprendre pourquoi les bactéries qu'il cultivait dans son laboratoire étaient mortes. 
                    Il se rendit finalement compte qu'une moisissure du genre Penicillinum 
                    fabriquant naturellement la pénicilline s'était introduite dans ses boîtes de culture !
                    </p>
                    <p className="mb-0 ">
                    Aujourd'hui, il existe un grand nombre d'antibiotiques dont les modes d'action sont variés.
                     Certains agissent sur 
                    la paroi ou la membrane des bactéries provoquant ainsi leur destruction.
                    </p> 
                  </MDBCol>
                  <MDBCol md="4" className="mt-3 pt-2">
                    <MDBView className="z-depth-1">
                      <MDBCardImage
                        className="img-fluid z-depth-1"
                         src="https://i-sam.unimedias.fr/2018/12/12/antibiotiques.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=478&w=850"
                        alt=""
                      />
                    </MDBView>
                  </MDBCol>
                </MDBRow> 
                <MDBRow className="px-5">  
            <div className="d-flex"> 
            {this.state.medicamentAntibiotique.map((el,index)=><MedicamentCard medicamentinfo={el} key={index} />)}
        </div>
        </MDBRow> 
              </MDBCardBody>
        </MDBCollapse> 


        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID}>           
          <MDBCardBody>
          <MDBRow className="my-4 px-5 d-flex justify-content-center">
                  <MDBCol md="8">
                    <h2 className="font-weight-bold mb-3" style={{color:"purple"}}>
                      Medicament Anti cholesterol 
                    </h2>
                    <p>
                    Près de 20% de la population adulte souffre d’une hypercholestérolémie. 
                    Afin de lutter contre cet excès de cholestérol, deux solutions existent : 
                    des ajustements diététiques et un traitement médicamenteux. Quand un régime alimentaire spécifique 
                    ne suffit pas, il faut donc se tourner vers des médicaments. Il s’agit de substances hypolipémiantes 
                    qui visent à réduire le taux de lipides (cholestérol et triglycérides) circulant dans le sang
                    </p>
                    <p className="mb-0 ">
                    Le médecin pourra prescrire des statines, des fibrates ou des chélateurs des acides biliaires. 
                    Les statines, très largement prescrites, entravent l’action d’une enzyme utilisée par le foie pour produire du cholestérol. Des prises de sang régulières permettent de suivre l’évolution du taux de cholestérol.
                     Dans les formes graves, une transplantation hépatique peut s’avérer indispensable .
                    </p>  
                  </MDBCol>
                  <MDBCol md="4" className="mt-3 pt-2">
                    <MDBView className="z-depth-1">
                      <MDBCardImage

                        className="img-fluid z-depth-1"
                        src="https://fr.cdn.v5.futura-sciences.com/buildsv6/images/largeoriginal/f/0/f/f0f23bae5e_50021513_pilules-paknyushcha-shutterstock.jpg"
                        alt=""
                      />
                    </MDBView>
                  </MDBCol>
                </MDBRow> 
                <MDBRow className="px-5" >  
                   <div className="d-flex"> 
                       {this.state.medicamentAnticholestirole.map((el,index)=><MedicamentCard medicamentinfo={el} key={index} />)}
                    </div>
                  </MDBRow> 
              </MDBCardBody>
        </MDBCollapse> 

        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID}>           
          <MDBCardBody>
          <MDBRow className="my-4 px-5 d-flex justify-content-center">
                  <MDBCol md="8">
                    <h2 className="font-weight-bold pink-text mb-3">
                      Medicament Anti histaminiques 
                    </h2>
                    <p>
                    Démangeaison cutanée suite à une piqûre d’insecte, œdème de la peau, poussée d’urticaire,
                     éternuements à répétition, yeux qui démangent ou qui pleurent, les signes d’une allergie gâchent 
                     rapidement le quotidien. Pour soulager ces désagréments, des anti-histaminiques sont souvent recommandés. 
                     En aucun cas, ces substances n’agissent sur la cause de l’allergie, ils calment seulement les symptômes. 
                    Ces médicaments ne sont toutefois d’aucune aide pour traiter une crise d’asthme.
                    </p>
                    <p className="mb-0 ">
                    Pour calmer les réactions allergiques, les antihistaminiques existent sous forme de pommades,
                     de comprimés ou de sprays. Les traitements sont disponibles en vente libre en pharmacie mais il
                      est recommandé de consulter un allergologue
                     pour identifier l’allergène et prévenir l’arrivée des prochaines crises.
                    </p>  
                  </MDBCol>
                  <MDBCol md="4" className="mt-3 pt-2">
                    <MDBView className="z-depth-1">
                      <MDBCardImage

                        className="img-fluid z-depth-1"
                        alt=''
                        src="https://www.rabais-pro.com/wp-content/uploads/2018/02/01-12-natural-allergy-remedies-allergies.jpg" /> 
                       
                    </MDBView>
                  </MDBCol>
                </MDBRow> 
                <MDBRow className="px-5" >  
                   <div className="d-flex"> 
                       {this.state.medicamentAntihistaminiques.map((el,index)=><MedicamentCard medicamentinfo={el} key={index} />)}
                    </div>
                  </MDBRow> 
              </MDBCardBody>
        </MDBCollapse> 

        <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID}>           
          <MDBCardBody>
                <MDBRow className="my-4 px-5 d-flex justify-content-center">
                  <MDBCol md="8">
                    <h2 className="font-weight-bold mb-3" style={{color:"purple"}}>
                      Medicament Antalgiques 
                    </h2>
                    <p>
                    Aspirine, paracétamol, ibuprofène, tramadol, codéine, morphine, fentanyl… ces noms très connus font 
                    partie de la grande famille des antalgiques. Egalement appelés analgésiques, ces médicaments sont destinés à
                     calmer la douleur. Ils se classent en trois paliers, selon leur puissance d’action. Les plus légers peuvent s’obtenir sans ordonnance :
                     on y a recours au quotidien pour soulager un mal de dos, une migraine, des règles douloureuses… 
                    </p>
                    <p className="mb-0 ">
                    Les modes d’action des antalgiques sont extrêmement variés, leurs contre-indications et leurs effets secondaires aussi. Alors, quelle molécule pour quelle douleur ?
                     Laquelle donner à un enfant, une femme enceinte ? Peut-on associer ibuprofène et paracétamol ? 
                    </p>  
                  </MDBCol>
                  <MDBCol md="4" className="mt-3 pt-2">
                    <MDBView className="z-depth-1">
                      <MDBCardImage
                        className="img-fluid z-depth-1"
                        src="https://img1.topsante.com/var/topsante/storage/images/medecine/medecine-divers/medicaments/prevenir/medicaments-les-formes-a-privilegier-248693/5691945-1-fre-FR/Medicaments-les-formes-a-privilegier.jpg?v1/cover=1024x684" 
                        /> 
                        
                     
                    </MDBView>
                  </MDBCol>
                </MDBRow> 
                <MDBRow className="px-5" >  
                   <div className="d-flex"> 
                       {this.state.medicamentAnalogique.map((el,index)=><MedicamentCard medicamentinfo={el} key={index} />)}
                    </div>
                  </MDBRow> 
              </MDBCardBody>
        </MDBCollapse> 



        </div>
            
        );
    }
}

export default Medicament

// const mapStateToProps=(state)=>
// {
//     return {
//         medicaments:state.medicamentReducer
//     }
// } 

// const mapDispatchToProps=(dispatch)=>
// {
//     return {
//         updatemedicament:medicaments=>
//         {
//             dispatch({
//                 type:'UPDATE_MEDICAMENT',
//                 medicaments
//             })
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (Medicament);


// getmedicament=()=>{

//     axios.get(`/getmedicament`).
//     then(res=>{ this.props.updatemedicament(res.data.filter(el=>
//         el.name.toLocaleLowerCase()===this.state.name.toLocaleLowerCase().trim()));  
//         document.getElementById('a').style.display="block"}  ).
//           catch((err)=>alert(err)) 
// }  

// getmedicamentanalogique=()=>{

//     axios.get(`/getmedicamentbysousclasse/antibiotique`).
//     then(res=> {this.props.updatemedicament(res.data.filter(el=>
//         el.sousclasse.toLocaleLowerCase()==="antibiotique"));
//        document.getElementById('a1').style.display="inline"
//     }  ).catch((err)=>alert(err)) 
// } 

// getmedicamentanticholestirole=()=>{

//     axios.get(`/getmedicamentbysousclasse/cholesterol`).
//     then(res=> {this.props.updatemedicament(res.data.filter(el=>
//         el.sousclasse.toLocaleLowerCase()==="Médicaments anti-cholestérol"));
//        document.getElementById('a2').style.display="block"
//     }  ).catch((err)=>alert(err)) 
// } 
