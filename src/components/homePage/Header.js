import React, { Component } from 'react'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'

export default class Header extends Component {
    render() {
        return (
            <div className="header flex">
                <div className="header-text">
                    <h1>Start building with our APIs for absolutely free.</h1>
                    <div className='flex'>
                        <input type="text" placeholder="Enter email address" />
                        <button>Schedule a Demo</button>
                    </div>

                    <p>Have any questions? Contact Us</p>
                </div>
                <div>
                    <img src={phone} alt="" />
                </div>
            </div>
        )
    }
}
