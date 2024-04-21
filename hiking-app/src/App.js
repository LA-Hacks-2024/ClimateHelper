import './App.css';
import Logo from './logo';
import Menu from './Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/about"


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
         
      <header className=  "App-header">
      <Logo/>
      <Routes >
            <Route path ="/"element = {<Menu/>}/>
            <Route path ="/about"element = {<About/>}/>
          </Routes>
        <div className="menu">
        
        </div>
                
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
