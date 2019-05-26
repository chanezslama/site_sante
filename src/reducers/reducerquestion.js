var questions=[
    {   _id:'1',
        titre:'prothese dentaire',
        question:'je veux savoir est ce que est possible ',
        categorie:'dentaire'
    }, 
    {   _id:'2',
    titre:'operation dos',
    question:'mjdjdhs',
    categorie:'chiriguie'
}

]

const questionReducer=(state=questions,action)=>{

switch (action.type) {

 case 'ADD_QUESTION' : 
 return (
      state.concat(action.newquestion) )


 case 'UPDATE_QUESTION' : 
 return (
    action.questions )


 case 'DELETE_QUESTION' : 
 return (
      state.filter(el=> el._id !== action._id ) 
 )


 case 'EDIT_QUESTION' :
  return ( 
      state.map(el=> el._id === action.editquestion._id ? el=action.editquestion : el ) 

  )

 default : return state 


}
} 

export default questionReducer