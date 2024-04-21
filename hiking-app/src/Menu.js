 import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/about" className="about-link">About</Link></li>
                <li><Link to="/touchgrass" className="about-link">Touch Grass</Link></li>
                <li><Link to="/signup" className="about-link">Sign up</Link></li>
                {/* <li className = "signup">Signup</li> */}
            </ul>
        </div>
    );  
}

export default Menu;