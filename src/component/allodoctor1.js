import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {MDBIcon} from 'mdbreact'
import {MDBCol,MDBRow} from 'mdbreact'
import axios from 'axios'
import MapComponent from './Mapcomponent'


class AlloDoctor2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentStep: 1,
          currentLatLng: {
            lat: 0,
            lng: 0
          },
          isMarkerShown: false }    
      } 
  
      componentWillUpdate(){
        this.getGeoLocation()
      }
    
      componentDidMount() {
        this.delayedShowMarker()
      }
    
      delayedShowMarker = () => {
        setTimeout(() => {
          this.getGeoLocation()
          this.setState({ isMarkerShown: true })
        }, 3000)
      }
    
      handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
      } 
  
      getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(prevState => ({
                        currentLatLng: {
                            ...prevState.currentLatLng,
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }))
                }
            )
        } 
    }

    componentDidMount=()=>{

  axios.get(`/getdoctor/${this.props._id}`).
  then(res=>this.props.updatedoctorReducer(res.data))

    } 

   
    
     
    render() {
        

 return ( <div className=""> 

 
<MDBRow className="px-5 pt-3 text-md-left rgba-grey-slight">
          <MDBCol lg="8" md="12" className="mb-3">
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
            </MDBCol>
          </MDBCol>
          </MDBRow> 

         


<MDBRow className=" px-5" style={{marginLeft:'60px'}}> 
    <MDBCol md="5" className="rgba-grey-slight"> 
    <h2 className="purple-text font-weight-bolder pt-5"> Informations de contact </h2>
          <div className="dark-grey-text d-flex font-weight-bolder flex-column">
      <p className="mr-3"> <MDBIcon icon="phone" /> {this.props.doctors[0].telephone} </p>
      <p> <MDBIcon icon="map-marker" /> {this.props.doctors[0].pays} </p> 
     <p> <MDBIcon icon="envelope" /> {this.props.doctors[0].email} </p> 
    <p> <MDBIcon icon="map-marker-alt" /> {this.props.doctors[0].adresse} </p>
      </div>
    <h2 className="purple-text font-weight-bolder"> Qualification professionnelle </h2>
{this.props.doctors[0].titre} {this.props.doctors[0].nom} <br/>
Spécialités :  {this.props.doctors[0].specialite} <br/>
Diplome et formation: <br/>

Baccalauréat - Lycée Mohamed Maarouf de Sousse
Lauréat de la faculté de médecine Ibn Eljazzar de Sousse
Internat en médecine aux hôpitaux universitaires de Sousse
Admis au concours national de résidanat
Diplôme de Spécialiste en Chirurgie Orthopédique et Traumatologie 
Admis au concours national français d’autorisation d’exercice
Diplôme Inter-Universitaire (DIU) d’arthroscopie (France)
Autorisation d’exercice en France en tant que chirurgien orthopédist
<h2 className="purple-text font-weight-bolder"> Horaires d'ouverture </h2>
<pre> 
Lundi 14:0018:00 <br/>
Mardi 14:0018:00 <br/>
Mercredi 14:0018:00 <br/>
Jeudi 14:0018:00 <br/>
Vendredi 14:0018:00 <br/>
Samedi 14:0018:00 Horaires du mois de Ramadan <br/>
</pre> 

<h2 className="purple-text font-weight-bolder"> Avis medicale </h2>
<h2 className="purple-text font-weight-bolder"> Photos du cabinet </h2>


    </MDBCol> 
    
    <MDBCol md="7" className="py-5"> 
    <h2 className="py-5 purple-text font-weight-bolder"> Localisation et itinéraire </h2>
    <div > 
        <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        currentLocation={this.state.currentLatLng} />
      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(AlloDoctor2);
