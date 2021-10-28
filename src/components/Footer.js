import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "./assets/shared/desktop/logo.svg"

import icon1 from './assets/shared/desktop/facebook.svg'
import icon2 from './assets/shared/desktop/twitter.svg'
import icon3 from './assets/shared/desktop/linkedin.svg'

import './css/navigationBar.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="nav footer-nav">
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
                </div>
                <div className="icon">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                </div>

            </div>
        )
    }
}
