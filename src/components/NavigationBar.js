import React from 'react';
import { Link } from "react-router-dom";
import logo from "./assets/shared/desktop/logo.svg"
import './css/navigationBar.css'

const NavigationBar = () => {
    return (
        <div className="nav navbar">
            <li>
                <Link to="/"><img src={logo} alt="" /></Link>
            </li>
            <li>
                <Link to="pricing">Pricing</Link>
            </li>
            <li>
                <Link to="about">About</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
            <button className="btn"> Schedule a Demo </button>
        </div>
    );
}
export default NavigationBar;