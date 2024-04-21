 import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/about" className="about-link">About</Link></li>
                <li>Touch Grass</li>
                <li><Link to="/login">Login</Link></li>
                {/* <li className = "signup">Signup</li> */}
            </ul>
        </div>
    );
}

export default Menu;