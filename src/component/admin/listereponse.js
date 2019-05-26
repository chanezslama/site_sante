import React, { Component } from 'react';
import {MDBRow,MDBCol} from 'mdbreact'
import {connect} from 'react-redux'
import ReponseCard from './reponseCard'
import axios from 'axios'
import AdminInterface from './adminInterface'


class ListReponse extends Component {
    
    componentDidMount=()=>{ 
        axios.get(`/getreponse/${this.props._id}`).
        
        then((res)=>this.props.updatereponseReducer(res.data.filter(el=>el.idquestion===this.props._id))) 

    }

    render() { 
        const {reponses} = this.props
        return ( 
            <div> 
            <MDBRow> 
      <MDBCol md="2"> 
    <AdminInterface/> </MDBCol>
    <MDBCol md="10">
           <MDBRow className="px-5 d-flex flex-wrap justify-content-space-around">
        {reponses.map((el,index)=><ReponseCard reponseinfo={el} key={index} /> )}   
            
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
        reponses:state.reponseReducer
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
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListReponse); 

