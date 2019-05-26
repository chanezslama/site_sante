import React from 'react' 
import {Link} from 'react-router-dom'

const Accueil=()=>{

return <div className="d-flex py-5 font-weight-bolder px-5">  
<Link to="/"> <p className="mr-4"> Accueil  </p> </Link> 
<Link to="/medecinedouce"> <p className="mr-4"> Medecine douce  </p>  </Link> 
<Link to="/maladie"> <p className="mr-4"> Maladie </p>  </Link> 
<Link to="/recette"> <p className="mr-4"> Recette </p> </Link> 
<Link to="/adddoctor"> <p className="mr-4"> Inscription doctor </p> </Link> 
<Link to="/psychologie"> <p className="mr-4"> Psychologie </p> </Link> 
<Link to="/medicament"> <p className="mr-4"> Medicament </p> </Link> 
<Link to="/question" > <p className="mr-4"> NosEsperts </p>  </Link>
<Link to="/admin" > <p className="mr-4"> Admin </p>  </Link> 
<Link to="/inscription1"> <p className="mr-4"> Inscription1 </p>  </Link> 
<Link to="/allodoctor"> <p className="mr-4"> allodoctor </p>  </Link>
</div>
}

export default Accueil