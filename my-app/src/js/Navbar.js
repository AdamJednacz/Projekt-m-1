import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <a href="#">Web dev creative</a>
                </div>
                <ul className="links">
                    <li><a className="li_a" href="hero">Home</a></li>
                    <li><a className="li_a" href="about">About</a></li>
                    <li><a className="li_a" href="services">Services</a></li>
                    <li><a className="li_a" href="contact">Contact</a></li>
                </ul>
                <a href="#" className="action_btn">Get Started!</a>
                <button className="toggle_btn">
                    <FontAwesomeIcon className="icon" icon={faBars} />
                </button>
            </div>
        </header>
    );
};

export default Navbar;