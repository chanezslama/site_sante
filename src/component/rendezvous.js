import React, { Component } from 'react'; 
import {connect} from 'react-redux'
import {MDBIcon} from 'mdbreact'
import {MDBCol,MDBBtn,MDBRow} from 'mdbreact'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StepperRendezVous from './rendezvousstepper'




class RendezVous extends Component {
 
  
      handlechange=(event)=>{
          this.setState({
              [event.target.name]:event.target.value
          })
      }
  
  

    componentDidMount=()=>{

  axios.get(`/getdoctor/${this.props._id}`).
  then(res=>this.props.updatedoctorReducer(res.data))

    } 

   
    
     
    render() {
        

 return ( <div className=""> 

 
<MDBRow className="px-5 pt-3 text-md-left"> 

           <MDBCol md="5" className="mr-2 py-5 rgba-purple-slight" style={{borderRadius:'20px'}}> 
            <StepperRendezVous/>

           </MDBCol>


          <MDBCol  md="6" className="mb-3 py-5 rgba-cyan-slight rounded" style={{borderRadius:'20px'}}>
            <MDBCol md="4" lg="4" className="float-left">
              <div>

               <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className=" rounded-circle mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                style={{border:'3px solid purple'}}
                alt="Sample avatar" />
               </div>
            </MDBCol>
            <MDBCol md="8" lg="8" className="float-right">
              <h2 className="font-weight-bold mb-3"> 
              DR {this.props.doctors[0].prenom} {this.props.doctors[0].nom}
               </h2>
              <h6 className="font-weight-bold grey-text mb-3">
              <h5 className="font-weight-bold pink-text my-3"> {this.props.doctors[0].specialite}  </h5>              </h6>
              <p className="grey-text">
               
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" className="purple-text" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" className="purple-text" />
              </a>
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="dribbble" className="purple-text" />
              </a> 
              <div className="dark-grey-text d-flex font-weight-bolder flex-column">
      <p className="mr-3"> <MDBIcon icon="phone" /> {this.props.doctors[0].telephone} </p>
      <p> <MDBIcon icon="map-marker" /> {this.props.doctors[0].pays} </p> 
     <p> <MDBIcon icon="envelope" /> {this.props.doctors[0].email} </p> 
    <p> <MDBIcon icon="map-marker-alt" /> {this.props.doctors[0].adresse} </p> 
    <Link to={`/fichedoctor/${this.props._id}`}>  <MDBBtn color="purple" className="btn-block">  Profil </MDBBtn></Link>

      </div> 

            </MDBCol>
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

export default connect(mapStateToProps,mapDispatchToProps)(RendezVous);
