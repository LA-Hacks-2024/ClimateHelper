import './App.css';
import Logo from './logo';
import BGTrees from './bgtrees';
import Menu from './Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/about"


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
          {/* <BGTrees/> */}
         
      <header className=  "App-header">
      <Logo/>
      {/* <Menu/> */}
      <Routes >
            <Route path ="/"element = {<Menu/>}/>
            <Route path ="/about"element = {<About/>}/>
          </Routes>
        <div className="menu">
        
        </div>

       

          {/* <label>username</label>
          <input class="w3-input" type="text"></input>

          <label>password</label>
          <input class="w3-input" type="text"></input><br></br>
    
          <button>sign in</button> */}

         
                
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
