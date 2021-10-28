import React, { Component } from 'react'
import tesla from '../assets/shared/desktop/tesla.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import HP from '../assets/shared/desktop/hewlett-packard.svg'

import oracle from '../assets/shared/desktop/oracle.svg'
import google from '../assets/shared/desktop/google.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'

export default class Partner extends Component {
    render() {
        return (
            <div className="partner-bg partner flex">
                <div className="partner-bloc">
                    <h2 className="partner-title">Who we work with</h2>
                    <p className="partner-text">
                        Today, millions of people around the world have successfully connected
                        their accounts to apps they love using our API. We provide developers
                        with the tools they need to create easy and accessible experiences
                        for their users.
                    </p>
                    <button className="btn-partner"> About Us </button>
                </div>

                <div className="grid-container">
                    <img className="grid-item" src={tesla} alt="" />
                    <img className="grid-item" src={microsoft} alt="" />
                    <img className="grid-item" src={HP} alt="" />

                    <img className="grid-item" src={oracle} alt="" />
                    <img className="grid-item" src={google} alt="" />
                    <img className="grid-item" src={nvidia} alt="" />
                </div>


            </div>
        )
    }
}
