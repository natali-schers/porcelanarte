import './index.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {

    return (
        <header>
            <nav className='nav'>
                <NavLink to='/' className={({ isActive }) => isActive ? "link highlight" : "link"}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? "link highlight" : "link"}>Sobre</NavLink>
            </nav>
        </header>
    )
}