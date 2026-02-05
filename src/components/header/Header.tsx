import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='logo'><i className="fa-solid fa-bandage"></i><span>Bandaid</span></div>
                <nav className='navbar'>
                    <ul className='nav-links'>
                        <li className='nav-link'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/offers">Offers</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='links'>
                    <Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link>
                    <Link to="/cart"><i className="fa-solid fa-circle-user"></i></Link>
                </div>
            </div>
        </header>
    )
}

export default Header