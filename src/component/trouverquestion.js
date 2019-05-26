import React, { Component } from 'react'; 
import {MDBView,MDBCol,MDBRow,MDBMask,MDBBtn, MDBContainer} from 'mdbreact'
import { MDBCard,MDBAlert, MDBIcon, MDBCardTitle, MDBCardBody, MDBCardText, MDBCardFooter, MDBCardHeader } from 'mdbreact';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Reponse=({reponseinfo:{titre,question,_id, reponse,email_medein,prenom_medein,nom_medecin}})=>{
    return <> 
     <MDBCard  className="rounded m-3 white-text text-left" style={{width:'40em'}} >
             <MDBCardHeader color="blue"> <h6> Titre du Question : {titre} </h6> </MDBCardHeader>
             <MDBCardTitle className="text-center blue-text py-3"><h6> Question : {question} </h6> </MDBCardTitle>
            <MDBCardBody> 
            <MDBCardText className="dont-weight d-flex">

    <MDBCol md="4" className="mx-auto">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzEfgpFZgok3ov95r_dbthnJifJyE0K-Wkfrulp0NKsudL2FwiA"
      alt=""
      className="rounded-circle z-depth-1 img-fluid"
    />
  </MDBCol>     
   <MDBCol md="8"> 
            <h6> Doctor : {nom_medecin} </h6> 
            <h6> Prenom du medecin : {prenom_medein} </h6> 
             <h6>   specialite :   </h6>
            <h6> Email du medecin : {email_medein} </h6> 

            <p> Diplômé en tant que sexologue clinicien de la faculté de médecine
                 EBN ELJAZZAR Sousse .Traitement du dysfonctionnement érectile Traitement de l'éjaculation...
           </p>
           <h6 className="bg-info" style={{backgroundColor:'purple'}}>  La Reponse : {reponse} </h6> 
 
  </MDBCol>       
  

             </MDBCardText>
            </MDBCardBody>

             </MDBCard>

    </>
}

class Trouverquestion extends Component {
    constructor(props) {
        super(props);
        this.state = { tab:[],
                       last:[]
        
        };
    } 

    handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
       
       componentDidMount=()=>{

        axios.get(`/getreponse`).then((res)=>this.setState({last:res.data}))


       }

        


        getReponse=()=>{ 
            axios.get(`/getreponse`).then((res)=>{this.setState({tab:res.data.filter(el=>el.titre.includes(this.state.name))});
        
           if (res.data.filter(el=>el.titre.includes(this.state.name)).length===0) { document.getElementById('p').innerText="pas de jjjjj" }
        
           axios.get('/getdoctor').then((res)=>this.props.updatedoctorReducer(res.data)).catch((err)=>alert(err))
           
           
        })
        }

    render() {
        return (<div className="px-5">
             <MDBView zoom > 
              <div className="d-flex justify-content-center"> 
              <img 
              style={{width:'1000px',height:'430px'}}
              alt='' 
              className="img-fluid"
              src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/3/1313644/la-teleconsultation-nous-avons-teste.jpg?v1/cover=1024x556"/>
              </div>
             <MDBMask className="d-flex flex-column justify-content-center "> 
             <MDBRow> 
             <MDBCol> 
               <h1 className=" text-center font-weight-bolder my-5" style={{color:'#2bbbad'}}>Nos experts </h1>
               <h4 className="px-3 font-weight-bolder py-3 text-center white-text rgba-black-light w-responsive mx-auto mb-5" style={{maxWidth:'600px'}}>
                 Dermatologue, gynécologue, ou rhumatologue..., les experts de E-hygiene répondent 
                 à toutes les questions que vous vous posez. 
                 </h4>  
             </MDBCol>
             </MDBRow>
             <MDBRow className="d-flex justify-content-center">
             <MDBCol md="12">         
             <div className="cyan-text m-4 d-flex justify-content-center align-items-center">
              <input 
                name="name"
                type="text"
                onChange={this.handlechange}
                className="cyan-text"
                onChange={this.handlechange} 
                style={{width:'300px',border:'2px solid #2bbbad'}}
                /> 
              <MDBBtn onClick={this.getReponse} className=""> <MDBIcon icon="search" className="mr-3" />  rechercher reponse </MDBBtn>
            </div>
         
        </MDBCol>
        </MDBRow>  
        </MDBMask>
        </MDBView> 

        <MDBRow className="my-5 px-5 d-flex flex-wrap justify-content-space-around"> 
        {this.state.tab.length!==0 ? <h1> Titre du question: {this.state.tab[0].titre} </h1>  :<h1></h1>}
               {this.state.tab.map((el,index)=><Reponse reponseinfo={el} key={index} /> )}  
        <div id="p" className="px-5"></div> 
            
        </MDBRow> 

        <MDBRow className="px-5 d-flex justify-content-center"> 
        <MDBCol md="4" className=" rgba-grey-slight py-3 mr-2"> 
         <h3 className="text-center mb-3 font-weight-bolder" style={{color:'#2bbbad'}}> Dernières questions / réponses </h3> 
         <p> E-hygiene vous donne les Dernières </p>
        
        {this.state.last.map((el,index)=> <div key={index}> 
           
            <MDBRow style={{borderBottom:'2px  #2bbbad'}} className="rgba-white-strong py-2 mx-2 my-2">
            <MDBCol md="3">
              <MDBView hover zoom rounded className="rounded-circle z-depth-1-half mb-4">
                <img
                  className="img-fluid rounded-circle"
                  src="https://centrik.in/wp-content/uploads/2017/02/user-image-.png"    
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol md="9" className="pink-text">
              <p className="font-weight-bold">
              {el.question}
              </p> 
              <div className="d-flex justify-content-between">
                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                 
                <MDBRow> 
             <MDBCol md="4">  <h6> <MDBIcon icon="user" size="1x" className="purple-text" /> {el.nom_medecin} </h6> </MDBCol>
             <MDBCol md="8">   <h6> <MDBIcon icon="envelope" size="1x" className="purple-text" /> {el.categorie} </h6>  </MDBCol> 
             </MDBRow> 
                </MDBCol>
              </div>
              <div className="d-flex justify-content-center"> 
              <Link className="purple-text" to={`/reponseuser/${el._id}`}> 
                 Details <MDBIcon icon="angle-double-right" />
                </Link>
              </div>

            </MDBCol>
          </MDBRow> 
          </div>
            )}
        
        
         
        
        </MDBCol> 
      
        <MDBCol md="7" className="px-5 py-3 mr-2">
              <h3 className="text-center mb-3 font-weight-bolder" style={{color:'#2bbbad'}}>  Categories fréquentes </h3> 
              
         <div>
         <h4 className="text-left mt-5 pink-text font-weight-bolder" > 
               Les questions au dermatologue </h4> 
            <p> Acné, taches sur la peau, psoriasis, eczéma… Notre expert en dermatologie répond à vos questions
                 concernant les soins de la peau et les maladies cutanées. </p>
         
           <MDBRow className="d-flex flex-wrap">      
           {this.state.last.map((el,index)=> <MDBRow> <MDBCol md="12"> 
             <MDBCard key={index} className="px-5 py-3 m-2" style={{
                 
                
                 border:'2px solid #2bbbad',width:'35em',borderRadius:'30px'}}>   
              <Link  to={`/reponseuser/${el._id}`}>   
                 <MDBRow>  
                      <h6 className="dark-grey-text"> 
                       <MDBIcon icon="angle-double-right" style={{color:'#2bbbad'}} className="mr-2" /> {el.question} ? </h6> </MDBRow>  </Link>
                         
              </MDBCard> 
              </MDBCol>
              </MDBRow> 
           )}     
           </MDBRow> 
         </div> 

         <div>
         <h4 className="text-left mt-5 pink-text font-weight-bolder" > 
         Vos questions au psychologue </h4> 
            <p> Nos experts en psychologie répondent à vos questions.</p>
         
            <MDBRow className="d-flex flex-wrap">      
           {this.state.last.map((el,index)=> <MDBRow> <MDBCol md="12"> 
             <MDBCard key={index} className="px-5 py-3 m-2" style={{
                 
                
                 border:'2px solid #2bbbad',width:'35em',borderRadius:'30px'}}>   
              <Link  to={`/reponseuser/${el._id}`}>   
                 <MDBRow>  
                      <h6 className="dark-grey-text"> 
                       <MDBIcon icon="angle-double-right" style={{color:'#2bbbad'}} className="mr-2" /> {el.question} ? </h6> </MDBRow>  </Link>
                         
              </MDBCard> 
              </MDBCol>
              </MDBRow> 
           )}     
           </MDBRow> 
         </div>





        </MDBCol>   
        </MDBRow>   











        </div>);
    }
}


const mapStateToProps=(state)=>
{
    return {
        reponses:state.reponseReducer,
        doctors:state.doctors
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updatereponseReducer:reponses=>
        {
            dispatch({
                type:'UPDATE_REPONSE',
                reponses
            })
        },
        updatedoctorReducer:doctors=>
        {
            dispatch({
                type:'UPDATE_DOCTORS',
                doctors
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Trouverquestion); 



