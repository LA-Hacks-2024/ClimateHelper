import React from "react";
import {useNavigate} from "react-router-dom";

function about(){
  //const [goToHome, setGoToHome] = React.useState(false);
  const navigate = useNavigate();
  // if (goToHome){
  //   return <Navigate to ="/"/>;
  // }  

  return (
    <div className="App-about">
      <div className="menu">
      <ul>
      <li onClick={() => {
        navigate("/");
      }}>
        <div className="about-page">
        Go to Home page
        </div>
      </li>
      </ul>
      </div>This website is supposed to be an all-in-one social good platform in the Los Angeles area. After logging in, the user should be able to find volunteer opportunities and learn more about how they can do their part in helping the environment.</div>
  )
}
export default about;