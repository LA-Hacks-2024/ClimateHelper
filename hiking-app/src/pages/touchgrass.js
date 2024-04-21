import React from "react";
import {useNavigate} from "react-router-dom";

function Touchgrass(){
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
        Go to Home page
      </li>
      </ul>
      </div>
    </div>
  )
}
export default Touchgrass;