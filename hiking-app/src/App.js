import './App.css';
import Logo from './logo';
import Menu from './Menu'
import Login from "./components/login.js"

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

          <label>username</label>
          <input class="w3-input" type="text"></input>

          <label>password</label>
          <input class="w3-input" type="text"></input>

          <button>sign in</button>
                
      </header>
    </div>
  );
}

export default App;
