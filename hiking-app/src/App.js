import './App.css';
import Logo from './logo';
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      
      <header className=  "App-header">
        <div className="menu">
        <Menu/>
        </div>

        <Logo/>

          <label>username</label>
          <input class="w3-input" type="text"></input>

          <label>password</label>
          <input class="w3-input" type="text"></input><br></br>

          <button>sign in</button>
                
      </header>
    </div>
  );
}

export default App;
