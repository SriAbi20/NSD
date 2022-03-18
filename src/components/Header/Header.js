import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss'
const Header = () =>{
    const [active,setActive]=useState(false);
    const showMenu = () =>{
        setActive(!active)
    }
    return(
        <div className='header'>

                    <div className="header__logo">
                        <h3>Negotiated Skills Development</h3>
                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                        <CloseIcon className='close' onClick={showMenu}/>
                    </div>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rationale'>Rationale</Link>
                    </li>
                    <li>
                        <Link to='/nsd'>NSD Contract</Link>
                    </li>
                    <li>
                        <Link to='/swot'>SWOT Analysis</Link>
                    </li>
                    <li>
                        <Link to='/job'>Job Specification</Link>
                    </li>
                    <li>
                        <Link to='/plan'>Plan</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

                    <div className="changer">
                        <MenuIcon className='menu' onClick={showMenu}/>
                    </div>
                    </div>
    )
}

export default Header;