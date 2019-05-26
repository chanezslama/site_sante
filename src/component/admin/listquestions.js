import React, { Component } from 'react';
import {MDBRow,MDBCol} from 'mdbreact'
import {connect} from 'react-redux'
import QuestionCard from './questioncard'
import axios from 'axios'
import AdminInterface from './adminInterface'


class ListQuestion extends Component {
    
     componentDidMount=()=>{
        axios.get('/getquestion').then((res)=>this.props.updateReducer(res.data)) 

    }

    render() { 
        const {questions} = this.props
        return ( 
            <div> 
            <MDBRow> 
      <MDBCol md="2"> 
    <AdminInterface/> </MDBCol>
    <MDBCol md="10">
           <MDBRow className="px-5 d-flex flex-wrap justify-content-space-around">
        {questions.map((el,index)=><QuestionCard questioninfo={el} key={index} /> )}   
            
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
        questions:state.questionReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateReducer:questions=>
        {
            dispatch({
                type:'UPDATE_QUESTION',
                questions
            })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListQuestion); 

