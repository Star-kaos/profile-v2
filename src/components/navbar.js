import './navbar.css';

function navbar() {
    return (
        // navbarContainer useless
        <nav className="navbarContainer">

            <div className='navbar'>
                <ul className='navbarUl'>
                    <div className='logoLi'>
                        <li className='navbarLiLogo'>elijahperera.com</li>
                    </div>
                    <div className='contentsLi'>
                        <li className='navbarLi'>About</li>
                        <li className='navbarLi'>Contact</li>
                        <li className='navbarLi'>Projects</li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;
