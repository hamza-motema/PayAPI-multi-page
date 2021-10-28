import React, { Component } from 'react'
import image from '../assets/home/desktop/illustration-easy-to-implement.svg'

export default class Implementation extends Component {
    render() {
        return (
            <div className="implementation flex">
                <div className="frame1">
                    <img className="img" src={image} alt="" />
                </div>
                <div>
                    <h2>Easy to implement</h2>
                    <p>
                        Our API comes with just a few lines of code. You’ll be up and running in
                        no time. We built our documentation page to integrate payments functionality
                        with ease.
                    </p>
                </div>
            </div>
        )
    }
}
