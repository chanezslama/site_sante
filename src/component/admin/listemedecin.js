import React, { Component } from 'react';
import {MDBRow,MDBCol} from 'mdbreact'
import {connect} from 'react-redux'
import DoctorCard from './doctorcard'
import axios from 'axios'
import AdminInterface from './adminInterface'


class ListDoctor extends Component {
  
    componentDidMount=()=>{

        axios.get('/getdoctor').
        then((res)=>this.props.updatedoctorReducer(res.data)).catch((err)=>alert(err))
       } 

    

    render() { 
        const {doctors} = this.props
        return ( <div> 
            <MDBRow> 
      <MDBCol md="2"> 
    <AdminInterface/> </MDBCol>
    <MDBCol md="10">
           <MDBRow className="px-5 d-flex flex-wrap justify-content-space-around">
        {doctors.map((el,index)=><DoctorCard doctorinfo={el} key={index} /> )}   
            
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
        doctors:state.doctorReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        updatedoctorReducer:doctors=>
        {
            dispatch({
                type:'UPDATE_DOCTORS',
                doctors
            })
        }
    }
}
 


export default connect(mapStateToProps,mapDispatchToProps)(ListDoctor);