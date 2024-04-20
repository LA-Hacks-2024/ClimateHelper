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
       
      </header>
    </div>
  );
}

export default App;
