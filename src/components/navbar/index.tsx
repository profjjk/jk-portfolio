import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState<boolean>(false);

    useEffect(() => {
        const navMenu = document.querySelector('.nav-menu') as HTMLDivElement;
        const navList = document.querySelector('.nav-list') as HTMLUListElement;

        if (showMenu) {
            navMenu.classList.add('open');
            navList.classList.remove('hidden');
        } else {
            navMenu.classList.remove('open');
            navList.classList.add('hidden');
        }
    }, [showMenu]);

    return (
        <header>
            <h3>
                <Link to={'/'}>Jordan_Kelly</Link>
            </h3>

            <nav>
                <div className={'nav-menu'} onClick={() => setShowMenu(!showMenu)}>
                    <div className={'menu-line'} />
                    <div className={'menu-line'} />
                    <div className={'menu-line'} />
                </div>

                <ul className={'nav-list'}>
                    <li className={'nav-link'} onClick={() => setShowMenu(false)}>
                        <NavLink to={'work'}>Work</NavLink>
                    </li>

                    {/*<li className={'nav-link'} onClick={() => setShowMenu(false)}>*/}
                    {/*    <NavLink to={'projects'}>Projects</NavLink>*/}
                    {/*</li>*/}

                    <li className={'nav-link'} onClick={() => setShowMenu(false)}>
                        <NavLink to={'contact'}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}