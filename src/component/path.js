import React from 'react' 
import MedecineDouce from './medecinedouce'
import Maladie from './maladie' 
import InscriptionDoctor from './inscriptionmedcien' 
import Recette from './recette'
import Accueil from './Accueil' 
import Psychologie from './psychologie'
import {Route} from 'react-router-dom' 
import Medicament from './medicament';
import AdminInterface from './admin/adminInterface';
import AddMedicament from './admin/ajoutermedicament'; 
import ListMedicament from './admin/listmedicament'
import Poserquestion from './Poserquestion';
import Trouverquestion from './trouverquestion';
import Question from './question'
import EditMedicament from './admin/editmedicament'
import ListQuestion from './admin/listquestions'
import EditQuestion from './admin/editquestion' 
import ListDoctor from './admin/listemedecin'
import EditDoctor from './admin/editdoctor'
import ComptePatient from './poserquestion2'
import Authentification from './authentification';
import EspaceDoctor from './espaceDoctor';
import Questioncategorie from './questioncategorie';
import ProfilDoctor from './profildoctor';
import RepondQuestion from './admin/repondquestion'
import ListReponse from './admin/listereponse'
import Reponse2 from './reponsecarduser'
import StepperExample from './inscriptionstepeer'
import AlloDoctor from './allodoctor'
import AlloDoctor2 from './allodoctor1'
import RendezVous from './rendezvous'

const Routes=()=> {
return <div> 
<Route path="/" component={Accueil} /> 
<Route path="/medecinedouce" component={MedecineDouce} /> 
<Route path="/maladie" component={Maladie} /> 
<Route path="/recette" component={Recette} /> 
<Route path="/adddoctor" component={InscriptionDoctor} /> 
<Route path="/psychologie" component={Psychologie} /> 
<Route path="/psyshologie/addiction" component={Recette} /> 
<Route path="/medicament" component={Medicament} /> 
<Route path="/poserquestion" component={Poserquestion} /> 
<Route path="/trouverquestion" component={Trouverquestion} /> 
<Route path="/question" component={Question} /> 
<Route path="/poserquestion2" component={ComptePatient} /> 
<Route path='/authentification' component={Authentification} /> 
<Route path="/espacedoctor/:_id" render={props=> <EspaceDoctor   _id={props.match.params._id} />}/>
<Route path="/getquestionbycategorie/:categorie/:_id"  render={ props=> <Questioncategorie _id={props.match.params._id} categorie={props.match.params.categorie}/> }/>
<Route path="/profildoctor/:_id"  render={props=> <ProfilDoctor   _id={props.match.params._id} />}/>
<Route exact path="/admin" component={AdminInterface} /> 
<Route path="/addmedicament" component={AddMedicament} /> 
<Route path="/getmedicament" component={ListMedicament} /> 
<Route path="/editmedicament/:_id" render={(props)=> <EditMedicament   _id={props.match.params._id}   />} />
<Route path="/getquestion" component={ListQuestion} /> 
<Route path="/editquestion/:_id" render={props=> <EditQuestion   _id={props.match.params._id}   />} /> 
<Route path="/repondquestion/:_id" render={props=> <RepondQuestion   _id={props.match.params._id}   />} />
<Route path="/editdoctor/:_id" render={props=> <EditDoctor   _id={props.match.params._id}   />} />
<Route path="/getdoctor" component={ListDoctor} /> 

<Route path="/getreponse/:_id"  render={props=> <ListReponse   _id={props.match.params._id}   />} />
<Route path="/reponseuser/:_id"  render={props=> <Reponse2   _id={props.match.params._id}   />} />
<Route path="/inscription1" component={StepperExample} />

<Route path="/allodoctor" component={AlloDoctor} />
<Route path="/fichedoctor/:_id" render={props=> <AlloDoctor2   _id={props.match.params._id}   />}   />
<Route path="/rendezvous/:_id" render={props=> <RendezVous   _id={props.match.params._id}   />}   />






</div>
}

export default Routes