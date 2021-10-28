import React, { Component } from 'react'
import image from '../assets/home/desktop/illustration-simple-ui.svg'

import icon1 from '../assets/home/desktop/icon-personal-finances.svg'
import icon2 from '../assets/home/desktop/icon-banking-and-coverage.svg'
import icon3 from '../assets/home/desktop/icon-consumer-payments.svg'

export default class UXdesign extends Component {
    render() {
        return (
            <div className="uxdesign">
                <div className="part1 flex">
                    <div className="frame1">
                        <h2>Simple UI & UX</h2>
                        <p>
                            Our pre-built form is easy to integrate in your app or website’s checkout
                            flow and designed to optimize conversion.
                        </p>
                    </div>
                    <div className="frame2">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className="part2 flex">
                    <div>
                        <img src={icon1} alt="" />
                        <h3>Personal Finances</h3>
                        <p>
                            Consolidate financial data from multiple sources and categorize transactions up to
                            2 years of history. Analyze reports to reconcile activities in your account.
                        </p>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <h3>Banking & Coverage</h3>
                        <p>
                            With our platform, you can speed up account onboarding and support ongoing payments
                            for checking, savings, credit card, and brokerage accounts.
                        </p>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <h3>Consumer Payments</h3>
                        <p>
                            It’s easier to set up secure bank payments with us through a flow designed with the
                            user experience in mind. Customers could instantly authenticate their account.
                        </p>
                    </div>
                </div>
                <div className="part3 flex">
                    <h2>Ready to start?</h2>
                    <div className="uxdesign-btn">
                        <input type="text" placeholder="Enter email address" />
                        <button>Schedule a Demo</button>
                    </div>
                </div>
            </div>
        )
    }
}
