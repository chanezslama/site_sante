var medicaments=[
    {   _id:'1',
        nom:'adol',
        forme:'mjdjdhs',
        duree:'2mois'
    },
    {   _id:'2',
    nom:'doliprane',
    forme:'kkkkkk',
    duree:'3mois'
}]

const medicamentReducer=(state=[],action)=>{

switch (action.type) {

 case 'ADD_MEDICAMENT' : 
 return (
      state.concat(action.newmedicament) )


 case 'UPDATE_MEDICAMENT' : 
 return (
    action.medicaments )


 case 'DELETE_MEDICAMENT' : 
 return (
      state.filter(el=> el._id !== action._id ) 
 )


 case 'EDIT_MEDICAMENT' :
  return ( 
      state.map(el=> el._id === action.editmedicament._id ? el=action.editmedicament : el ) 

  )

 default : return state 


}
} 

export default medicamentReducer