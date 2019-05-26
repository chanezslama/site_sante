import React, { Component } from 'react';
import {MDBRow,MDBCol} from 'mdbreact'
import {connect} from 'react-redux'
import MedicamentCard from './medicamentCard'
import axios from 'axios'
import AdminInterface from './adminInterface'


class Listmedicament extends Component {
  
    componentDidMount=()=>{

        axios.get('/getmedicament').
        then((res)=>this.props.updatemedicament(res.data)).catch((err)=>alert(err))
       } 

    

    render() { 
        const {medicaments} = this.props
        return ( <div> 
            <MDBRow> 
      <MDBCol md="2"> 
    <AdminInterface/> </MDBCol>
    <MDBCol md="10">
           <MDBRow className="px-5 d-flex flex-wrap justify-content-space-around">
        {medicaments.map((el,index)=><MedicamentCard medicamentinfo={el} key={index} /> )}   
            
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
        medicaments:state.medicamentReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        updatemedicament:medicaments=>
        {
            dispatch({
                type:'UPDATE_MEDICAMENT',
                medicaments
            })
        }
    }
}
 


export default connect(mapStateToProps,mapDispatchToProps)(Listmedicament);