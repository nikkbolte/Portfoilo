import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./HeaderStyles.css";
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/nikhil.png";




const Header = () => {
    const [click, setClick] = useState(false);
const handleClick = () => setClick(!click); 

    return (
        <>

            <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
                <div className="container" >
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo" href="#home"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className="right" id="navbarSupportedContent">
                        <ul className={click? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item active">
                            <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a class="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                            <a class="nav-link" href="#Projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-item' href='#Contact'>Contact</a> 
                            </li>
                        </ul>
                        <div className="hamburger" onClick={handleClick}>
                            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}


                        </div>

                    </nav>
                </div>
            </nav>

        </>
    )
        
    
}
export default Header


/*Header.defaultProps ={
    title: " Your Title here ",
    searchBar: true
}

//Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}*/