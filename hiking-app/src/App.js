import './App.css';
import Logo from './logo';
import Menu from './Menu'
import Login from "./components/login"

function App() {
  return (
    <div className="App">
      
      <header className=  "App-header">
        <div className="menu">
        <Menu/>
        
        </div>
        <div>
          <Login/>
        </div>
        <Logo/>
       
      </header>
    </div>
  );
}

export default App;
