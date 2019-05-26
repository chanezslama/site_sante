var reponses=[
    {   _id:'1',
        titre:'prothese dentaire',
        question:'je veux savoir est ce que est possible ',
        categorie:'medecine dentaire',
        nom_medecin:'ahmed',
        prenom_medein:'allani',
        email_medecin:'ahmed.allani@gmail.com',
        reponse:''
    }, 
    {   _id:'2',
    titre:'operation esthetique',
    question:'je veux savoir est ce que est possible ',
    categorie:'chiriguien',
    nom_medecin:'sarra',
    prenom_medein:'allani',
    email_medecin:'sarra.allani@gmail.com',
    reponse:''
}]

const reponseReducer=(state=[],action)=>{

switch (action.type) {

 case 'ADD_REPONSE' : 
 return (
      state.concat(action.newreponse) )


 case 'UPDATE_REPONSE' : 
 return (
    action.reponses )


 case 'DELETE_REPONSE' : 
 return (
      state.filter(el=> el._id !== action._id ) 
 )


 case 'EDIT_REPONSE' :
  return ( 
      state.map(el=> el._id === action.editreponse._id ? el=action.editreponse : el ) 

  )

 default : return state 


}
} 

export default reponseReducer