import React, { Component } from 'react'; 
import { MDBCard,MDBBtn, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
 
class RepondQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    } 

    handlechange=(event)=>{
        this.setState({
          [event.target.name]:event.target.value
        })
      } 
  
     componentDidMount=()=>{
         this.setState({
           ... this.props.questions.filter(el=> el._id===this.props._id)[0]  
         }) 

         
     }

     addreponse=()=>{
         
          axios.post(`/repondquestion`,{
            categorie:this.state.categorie,
            question:this.state.question,
            titre:this.state.titre,
            question:this.state.question,
            taille:this.state.taille,
            poids:this.state.poids,
            idquestion:this.state._id,
            nom_medecin:this.state.nom,
            prenom_medein:this.state.prenom,
            email_medein:this.state.email,
            reponse:this.state.reponse

          }).
          then(res=> alert('votre reponse est envoyee')).catch((err)=>alert(err))
  
    } 


    render() {
        return ( <div> 
    <MDBRow className="d-flex justify-content-center"> 
    <MDBCol md="10">   
        <MDBRow className="d-flex justify-content-center"> 
          <MDBCard className="card-image" >
            <div className="text-white  py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">                  
                  <a href="#!" className="purple-text font-weight-bold">
                    <strong> Repond au Question </strong>
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
          
            <select className="browser-default custom-select" 
            name="categorie" 
            value={this.state.categorie} 
            onChange={this.handlechange}>  
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
             <legend style={{color:'#d280cd'}}> Question :</legend>
             
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
       
             
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              contenu du question textarea
            </label>
            <textarea className="form-control"
             id="textarea" 
             value={this.state.question}
             name="question"
             onChange={this.handlechange} >default text</textarea>
             </fieldset>

          
             <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}>Information Patient :</legend>
             <MDBRow className="my-2"> 
                  <MDBCol md="12"> 
                  <div className="form-group">
                  <label className="col-md-4 control-label">Vous êtes ?</label>
                  <div className="col-md-4"> 
                   <label className="radio-inline" >
                   <input type="radio" name="radios" id="radios-0" value="1" checked="checked"/>
                      Femme
                  </label> 
                   <label className="radio-inline">
                    <input type="radio" name="radios" id="radios-1" value="2"/>
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
             <legend style={{color:'#d280cd'}}> Fichier Jointes :</legend>
             <MDBRow className="mt-4"> 
                  <MDBCol>  
                    <iframe src="https://riptutorial.com/Download/react-fr.pdf" style={{ width:'600px', height:'200px'}} frameborder="0"></iframe>
                  </MDBCol> 
              </MDBRow> 
          </fieldset> 

          <fieldset style={{border:'2px solid #d280cd',padding:'20px',marginBottom:'20px'}}>
             <legend style={{color:'#d280cd'}}> Reponses par des specialistes :</legend>
             <MDBRow className="mt-4"> 
               <MDBCol md="4"> 
               <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Email du Medecin
              </label>
               <input 
               type="email" 
               name="email" 
               onChange={this.handlechange}  
                id="defaultFormContactEmailEx"
              className="form-control" 
              value={this.state.email} />
               </MDBCol>
               <MDBCol md="4"> 
               <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Nom du Medecin
              </label>
               <input type="text"
                name="nom"
                 onChange={this.handlechange}  
                id="defaultFormContactEmailEx"
                 className="form-control" 
                 value={this.state.nom} />
               </MDBCol> 
               <MDBCol md="4"> 
               <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Prenom du Medecin
              </label>
               <input type="text"
                name="prenom" 
                onChange={this.handlechange}  
                id="defaultFormContactEmailEx"
              className="form-control" 
              value={this.state.prenom} />
               </MDBCol> 
              </MDBRow> 
              <MDBRow> 
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Reponse 
            </label>
            <textarea className="form-control"
             id="textarea" 
             value={this.state.reponse}
             name="reponse"
             onChange={this.handlechange} > 
             taper la reponse au question 
             </textarea>
             </MDBRow> 
          </fieldset>  
          </form> 
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <Link to="/repondquestion" >
                  <MDBBtn
                    color="cyan"
                    rounded
                    type="button"
                    onClick={this.addreponse}
                    className="btn-block z-depth-1"
                  >
                    Envoyer la reponse
                  </MDBBtn>
                  </Link>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBRow> 
        </MDBCol>
       </MDBRow>



        </div>
            
        );
    }
}


const mapStateToProps=(state)=>
{
    return {
        questions:state.questionReducer,
        doctors:state.doctorReducer
    }
}

export default connect(mapStateToProps) (RepondQuestion);