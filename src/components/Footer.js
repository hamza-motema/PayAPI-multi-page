import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
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
        )
    }
}
