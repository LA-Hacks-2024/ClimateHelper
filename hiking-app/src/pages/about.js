import React from "react";
import { Link } from 'react-router-dom';

function about(){
  //const [goToHome, setGoToHome] = React.useState(false);
  // if (goToHome){
  //   return <Navigate to ="/"/>;
  // }  

  return (
    <div className="App-about">
      <div className="menu-1">
      <ul>
        <div className="about-page">
          <ul>
          <Link to="/" className="about-link"> Go to Home page </Link>
        </ul>
        </div>
      {/* </li> */}
      </ul>
      </div>
      This website is supposed to be an all-in-one social good platform in the Los Angeles area. 
      After logging in, the user should be able to find volunteer opportunities and learn more about 
      how they can do their part in helping the environment.
      </div>
  )
}
export default about;