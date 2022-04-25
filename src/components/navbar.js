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
                        <li className='navbarLi'><a className='aTags' href="#about">About</a></li>
                        <li className='navbarLi'><a className='aTags' href="#contact">contact</a></li>
                        <li className='navbarLi'><a className='aTags' href="#projects">projects</a></li>
                    </div>
                </ul>
            </div>
        </nav>

    );
}

export default navbar;
