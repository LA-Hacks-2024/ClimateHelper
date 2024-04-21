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
      
      <button onClick={() => {
        navigate("/");
      }}>
        Go to Home page
      </button>
    </div>
  )
}
export default about;