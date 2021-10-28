import React from 'react';
import { Link } from "react-router-dom";
const NavigationBar = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
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
        </div>
    );
}
export default NavigationBar;