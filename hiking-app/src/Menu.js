 import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li>Touch Grass</li>
                <li className = "login">Login</li>
                {/* <li className = "signup">Signup</li> */}
            </ul>
        </div>
    );
}

export default Menu;