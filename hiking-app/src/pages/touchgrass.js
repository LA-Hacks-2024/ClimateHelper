import React from "react";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


function Touchgrass(){
  //const [goToHome, setGoToHome] = React.useState(false);
  const navigate = useNavigate();
  // if (goToHome){
  //   return <Navigate to ="/"/>;
  // }  

  return (
     <div className="App-about">
      <div className="menu-1">
      <ul>
        <div className="about-page-1">
          <ul>
          <Link to="/" className="about-link"> Go to Home page </Link>
        </ul>
        </div>
      {/* </li> */}
      </ul>
      </div>
      </div>
  )
}
export default Touchgrass;