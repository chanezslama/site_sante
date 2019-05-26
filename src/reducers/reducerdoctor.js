var doctors=[
    {   _id:'1',
        nom:'alex',
        prenom:'duprat',
        email:'alex.duprat@gmail.com'
    },
    {   _id:'2',
    nom:'sarra',
    prenom:'khalil',
    email:'alex.duprat@gmail.com'
}
   
]

const doctorReducer=(state=doctors,action)=>{

switch (action.type) {

 case 'ADD_DOCTOR' : 
 return (
      state.concat(action.newdoctor) )


 case 'UPDATE_DOCTORS' : 
 return (
    action.doctors )


 case 'DELETE_DOCTOR' : 
 return (
      state.filter(el=> el._id !== action._id ) 
 )


 case 'EDIT_DOCTOR' :
  return ( 
      state.map(el=> el._id === action.editdoctor._id ? el=action.editdoctor : el ) 

  )

 default : return state 


}
} 

export default doctorReducer