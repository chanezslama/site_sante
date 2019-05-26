import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
class AdminInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (<div> 
   <MDBRow className="px-5"> 
  <div className="sidenav">
  <Link to="/addmedicament" > Ajouter Medicament </Link>
  <Link to="/getmedicament">Listes des Medicament </Link>
  <Link to="/getquestion">Listes des Questions</Link> 
  <Link to="/getdoctor">Listes des medecins</Link>

</div>
</MDBRow>
</div>);
}
}

export default AdminInterface;