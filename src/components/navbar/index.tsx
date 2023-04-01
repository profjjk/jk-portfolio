import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <h3>
                <Link to={'/'}>Jordan Kelly</Link>
            </h3>
            <div>
                <NavLink className={'nav-link'} to={'about'}>About Me</NavLink>
                <NavLink className={'nav-link'} to={'projects'}>Projects</NavLink>
                <NavLink className={'nav-link'} to={'contact'}>Contact</NavLink>
            </div>
        </nav>
    )
}