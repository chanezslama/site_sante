import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {MDBIcon} from 'mdbreact'
import {MDBCardBody,MDBCol,MDBRow} from 'mdbreact'
import {  MDBCollapse } from "mdbreact";
import { MDBCard} from "mdbreact";
import axios from 'axios'
import ProfilDoctor from './profildoctor';


class EspaceDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        collapseID: "",

          };
    } 

    componentDidMount=()=>{

  axios.get(`/getdoctor/${this.props._id}`).
  then(res=>this.props.updatedoctorReducer(res.data))

    } 

    toggleCollapse = collapseID => () => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));
    }
    
     
    render() {
        

 return ( <div>  <MDBRow className="px-5"> 
<MDBCol md="12" className="py-3 menu rgba-black-strong d-flex justify-content-end "> 
              <a onClick={this.toggleCollapse("basicCollapse")} > Mon Profil </a>   
              <Link  to={`/profildoctor/${this.props.doctors[0]._id}`} className="ml-5 white-text" > Mon profil </Link>
              <Link  to={`/getquestionbycategorie/${this.props.doctors[0].specialite}/${this.props.doctors[0]._id}`} className="ml-5 purple-text " > Mes Question/Reponses </Link>
              <Link to="#"  className=" purple-text ml-5 "  > RDV </Link>
              <Link to="/"  className= "purple-text ml-5" > Se deconnecter </Link>

 
</MDBCol> 
</MDBRow>
<MDBRow className="px-5">
<MDBCol md="4" className="mb-md-0 mb-5">
<MDBCard className="text-center  rounded"style={{ backgroundColor:"#e1bee7",height:'800px' }} >
  <div className="mx-auto">
    <img
      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
      alt=""
      className="rounded-circle z-depth-1 img-fluid"
    />
  </div>
  <h4 className="font-weight-bold white-text mt-4"> 
  {this.props.doctors[0].prenom} {this.props.doctors[0].nom} 
  </h4>
  <h5 className="font-weight-bold pink-text my-3">
  {this.props.doctors[0].specialite} 
  </h5>
  <p className="font-weight-normal dark-grey-text">
    <MDBIcon className="fa fa-quote-left pr-2" />
    Le doctor {this.props.doctors[0].nom} est specialite en {this.props.doctors[0].specialite} voici les coordonnees.
  </p>
  <div className="white-text d-flex font-weight-bolder flex-column">
      <div className="d-flex justify-content-center "> 
      <p className="mr-3"> <MDBIcon icon="phone" /> {this.props.doctors[0].telephone} </p>
      <p> <MDBIcon icon="map-marker" /> {this.props.doctors[0].pays} </p> </div>
    <p> <MDBIcon icon="envelope" /> {this.props.doctors[0].email} </p> 
    <p> <MDBIcon icon="map-marker-alt" /> {this.props.doctors[0].adresse} </p>


 
  </div> 
</MDBCard>
</MDBCol> 
<MDBCol md="8">
<MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>           
          <MDBCardBody>
          
                <MDBRow className="px-5">  
                <ProfilDoctor _id={this.props.doctors[0]._id}   />

        </MDBRow> 
              </MDBCardBody>
        </MDBCollapse> 
</MDBCol> 
</MDBRow>
</div>

        );
    }
}


const mapStateToProps=(state)=>{
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

export default connect(mapStateToProps,mapDispatchToProps)(EspaceDoctor);
