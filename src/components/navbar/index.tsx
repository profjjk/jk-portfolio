import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <h3>
                <Link to={'/'}>Jordan_Kelly</Link>
            </h3>
            <div>
                <NavLink className={'nav-link'} to={'work'}>Work</NavLink>
                <NavLink className={'nav-link'} to={'projects'}>Projects</NavLink>
                <NavLink className={'nav-link'} to={'contact'}>Contact</NavLink>
            </div>
        </nav>
    )
}