import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../logo';

function about(){
  //const [goToHome, setGoToHome] = React.useState(false);
  // if (goToHome){
  //   return <Navigate to ="/"/>;
  // }  

  return (
    <div className="App-about">
      <div>
        {/* <Logo/> */}
      </div>
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
      Just a silly app in case you wanted to virtually touch grass.
      </div>
  )
}
export default about;