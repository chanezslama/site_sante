import React, { Component } from 'react'; 
import { MDBCard,MDBBtn, MDBRow, MDBCol, MDBView, MDBMask, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom'
import axios from 'axios'
 

class Poserquestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }  
    
    handlechange=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
    } 
    

     myFunction=()=> {
      var checkBox = document.getElementById("myCheck");
      var text = document.getElementById("text");
      
      if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    } 

    reset=()=>{
      this.setState({
        categorie:'',
        titre:'',
        question:'',
        taille:'',
        poids:'',
        traitment:''

      })
    }

    addquestion=()=>{
      axios.post('/poserquestion',{...this.state}).then(res=>{alert('votre question est envoyee'); this.reset()}).catch((err)=>alert(err)) 
    } 


    render() {
        return (<div className="px-5"> 

          
                

            <MDBRow className="m-2 py-5 px-5">
                <MDBCol md="4" className="d-flex flex-column align-items-start" style={{borderRadius:'15px'}} > 
                
                <div> 
                <MDBView> 
                   <img className="img-fluid" 
                   src="https://previews.123rf.com/images/rnl/rnl1307/rnl130700008/20673796-une-femme-dans-scrubs-m%C3%A9dicaux-tenant-un-panneau-avec-un-point-d-interrogation.jpg" 
                   alt=' '
                   />
                <MDBMask overlay="grey-strong" className="d-flex align-items-center"> 
                <div className="card-image white-text px-4">
                 <p className="mt-3"> <MDBIcon icon="check-circle" size="1x" className="white-text mr-2" /> Veuillez poser votre question médicale ici pour les médecins. </p>
                <p> <MDBIcon icon="check-circle" size="1x" className="white-text mr-2" /> Ce service n'est pas une messagerie instantanée.</p>
                <p> <MDBIcon icon="check-circle" size="1x" className="white-text mr-2" />  Nous vous invitons à vous connecter régulièrement pour vérifier l'arrivée de nouvelles réponses de la part des praticiens.</p>
                <p> <MDBIcon icon="check-circle" size="1x" className="white-text mr-2" /> Ceci n'est pas un service d'urgence. En cas d'urgence vitale il faut appeler le SAMU 190 ou la protection civile 198. </p>
                <p><MDBIcon icon="check-circle" size="1x" className="white-text mr-2" /> Le site propose des conseils médicaux pertinents, veuillez éviter de demander des prescriptions et vous limiter à une demande de conseil d’ordre général
                </p>  
                </div>
                   </MDBMask>
                 </MDBView> 
                </div> 
              
                <div> 
                  <MDBView className="mt-5"> 
                  <img className="img-fluid"
                  src="http://www.cazchurch.com/wp-content/uploads/2017/07/D020ACC0-6E9A-4BD0-A865-20F6BFB2A6AF-21185-000011000895083E.png"
                  />
                 <MDBMask className="d-flex align-items-end"> 
                  <h4 className=" font-weight-bolder white-text  px-5  py-2 rounded rgba-purple-slight">
                   Vos questions <br/> 100% confientielles <br/> 100% Gratuites </h4>
                  </MDBMask>
                  </MDBView>
               </div>

                </MDBCol>
           
<MDBCol md="8">
          <MDBCard
            className="card-image" >
            <div className="text-white rgba-purple-slight py-3 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Poser Votre Question </strong>
                  </a>
                </h3>
              </div>
           

              <form className="text-left"> 
              <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}>Categorie:</legend>
             <MDBRow className="my-2" >  
             <MDBCol md="12">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Categorie
            </label>
          
          <select className="browser-default custom-select" name="categorie" value={this.state.categorie} onChange={this.handlechange}>  
           <option value="categorie"> categorie </option>
           <option value="Médecine générale" >Médecine générale</option>
                                                            <option value="Médecine dentaire" >Médecine dentaire</option>
                                                            <option value="Cardiologie" >Cardiologie</option>
                                                            <option value="Dermatologie" >Dermatologie</option>
                                                            <option value="Endocrinologie-Diabétologie" >Endocrinologie-Diabétologie</option>
                                                            <option value="Gynécologie" >Gynécologie</option>
                                                            <option value="Ophtalmologie" >Ophtalmologie</option>
                                                            <option value="O.R.L" >O.R.L</option>
                                                            <option value="Orthopédie - Traumatologie" >Orthopédie - Traumatologie</option>
                                                            <option value="Pédiatrie" >Pédiatrie</option>
                                                            <option value="Psychiatrie" >Psychiatrie</option>
                                                            <option value="Sexologie" >Sexologie</option>
                                                            <option value="Médecine esthétique" >Médecine esthétique</option>
                                                            <option value="Gastro-entérologue" >Gastro-entérologue</option>
                                                            <option value="Carcinologie" >Carcinologie</option>
                                                            <option value="Urologie" >Urologie</option>
                                                            <option value="Je ne sais pas" >Je ne sais pas</option>
                                                            <option value="Hématologie" >Hématologie</option>
                                                            <option value="Neurologie" >Neurologie</option>
                                                            <option value="Nutrition" >Nutrition</option>
                                                            <option value="Rhumatologie" >Rhumatologie</option>
                                                            <option value="Néphrologie" >Néphrologie</option>
                                                            <option value="Pédopsychiatrie" >Pédopsychiatrie</option>
                                                            <option value="Orthophonie" >Orthophonie</option>
                                                            <option value="Pneumologie" >Pneumologie</option>
                                                            <option value="Médecine interne" >Médecine interne</option>

           </select>

            </MDBCol>   
             </MDBRow> 
             </fieldset>

             <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}> Question:</legend>
             
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
               Titre de la question 
              </label>
              <input
              type="text"
              name="titre"
              value={this.state.titre}
              onChange={this.handlechange}
              id="defaultFormContactEmailEx"
              className="form-control" />
       
             
            <label htmlFor="defaultFormContactEmailEx" className="mt-2 grey-text">
              contenu du question 
            </label>  
            <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text bg-light" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea
             className="form-control"
             name="question" 
             value={this.state.question}
             rows="4"
             onChange={this.handlechange}>
              Remplir la question
            
            </textarea> 
        </div>
             </fieldset>

             <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}> Information Patient :</legend> 
             <MDBRow className="my-2 grey-text"> 
                  <MDBCol md="12"> 
                  <div class="form-group">
                  <label className="col-md-4 control-label" for="radios">Vous êtes ?</label>
                  <div className="col-md-4"> 
                   <label className="radio-inline" for="radios-0"> 
                   <input type="radio" name="radios" onchange={this.handlechange} id="radios-0" value="1" checked="checked"/>
                      Femme
                  </label> 
                   <label class="radio-inline" for="radios-1">
                    <input type="radio" name="radios" onchange={this.handlechange} id="radios-1" value="2"/>
                     Homme
                     </label>
                     </div>
                     </div>
            </MDBCol>
            </MDBRow> 
            <MDBRow className="my-2" > 
             <MDBCol md="6">   
             <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Taille
            </label>
            <input
              type="text"
              name="taille"
              value={this.state.taille}
              id="defaultFormContactNameEx"
              onChange={this.handlechange}
              className="form-control" />
            </MDBCol>  
            <MDBCol md="6"> 
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Poids
            </label>
            <input
              type="text"
              name="poids"
              value={this.state.poids}
              onChange={this.handlechange}
              id="defaultFormContactEmailEx"
              className="form-control" />
             
             </MDBCol>  
             </MDBRow> 
            </fieldset>
           
            <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}> Traitment En cours </legend>
             <MDBRow className="grey-text mt-2"> 

              Vous avez des traitment : 
              <input type="checkbox"  className="ml-2" id="myCheck" onClick={this.myFunction} /> 

 
              <MDBCol md="12" id="text" style={{display:"none"}}>
              <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea
             className="form-control"
             name="traitment" 
             value={this.state.traitment}
             rows="4"
             onChange={this.handlechange}>
              preciser votre traitment            
            </textarea> 
        </div>
              </MDBCol>
            </MDBRow> 
            </fieldset>


            <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}> Fichiers Jointes </legend>
             <MDBRow className="mt-4"> 
              <MDBCol md="12"> 
            <div className="input-group">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                     telecharger
                       </span>
               </div>
             <div className="custom-file">
                       <input
                  type="file" 
                  name="file"
                  onChange={this.handlechange}
                className="custom-file-input"
                     id="inputGroupFile01"
               aria-describedby="inputGroupFileAddon01"
                     />
                 <label className="custom-file-label" htmlFor="inputGroupFile01">
                             choisir le fichier                           </label>
                      </div> 
                     </div> 
                  </MDBCol>
              </MDBRow> 
          </fieldset>

          </form>  
           
           
           
          
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12"> 
                <Link to="/poserquestion2"> 
                  <MDBBtn
                    color="purple"
                    rounded
                    type="button"
                    onClick={this.addquestion}
                    className="btn-block z-depth-1"
                  >
                    Pose la question 
                  </MDBBtn> 
                  </Link>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol> 
        </MDBRow>  
    
        </div>
            
        );
    }
}

export default Poserquestion;