import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux' 
import axios from 'axios'
import { MDBContainer, MDBRow,  MDBBtn, MDBCard,  MDBIcon } from 'mdbreact';



const Bienvenue=()=>{
return <MDBCard style={{width:'20em',height:'200px',marginLeft:'300px'}} color="pink"> 
 <h3 className="white-text">    Bienvenue a votre espace prive cliquer ici
 </h3>
</MDBCard>

}



class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
          existe:false,
          tab:[]
         };
       }


  handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        }) } 

    getdoctor=()=>{

        axios.get('/getdoctor').then((res)=>{
           
         if( res.data.filter(el=>el.email===this.state.email && el.password===this.state.password).length == 0 )
            {alert('authentification failed ') }  
           else
         {this.setState({existe:true})

                this.props.updatedoctorReducer(res.data.filter(el=>el.email===this.state.email && el.password===this.state.password )); 
         

        }}).catch((err)=>alert(err)) }  



    render() {
        return ( 
           
              
              this.state.existe ?  <Link to={`/espacedoctor/${this.props.doctors[0]._id}`}> <Bienvenue/> </Link>:


           <MDBContainer className="d-flex justify-content-center">
                <MDBCard  className="card-image">
                  <div className="text-white rgba-purple-slight py-5 px-5 z-depth-4">
                    <div className="text-center">
                      <h3 className="white-text mb-2 mt-4 font-weight-bold">
                        <a href="#!" className="purple-text font-weight-bold">
                          <strong> Connexion sur E-hygiene ? </strong>
                        </a> 
                      </h3> 
                      <p className="pink-text">  Merci de saisir vos coordonnees </p>
                    </div>
                   
                    <form>
              
              <div className="form-group">
                <label /> 
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                    <MDBIcon icon="envelope" />
                    </div>
                  </div> 
                  <input id="email" 
                  name="email" 
                  type="email" 
                  onChange={this.handlechange}
                   placeholder="taper votre email"
                    required="required"
                     className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label /> 
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-lock" />
                    </div>
                  </div> 
                  <input id="password"
                     name="password" 
                     placeholder="taper votre password"
                    type="password" 
                    onChange={this.handlechange}
                    required="required"
                     className="form-control" />
                   </div>
                    </div>              
                   </form> 
                   <MDBRow className="d-flex align-items-center mb-4">
                      <div className="text-center mb-3 col-md-12">
                       <MDBBtn
                          color="purple"
                          rounded
                          type="button"
                          className="btn-block z-depth-1"
                          onClick={this.getdoctor}
                        >
                          connexion
                        </MDBBtn>
                      </div>
                    </MDBRow>    
                  </div>
                </MDBCard>
          </MDBContainer>
            
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
 


export default connect(mapStateToProps,mapDispatchToProps)(Authentification); 
