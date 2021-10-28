import React, { Component } from 'react'
import Header from './homePage/Header'
import Implementation from './homePage/Implementation'
import Partner from './homePage/Partner'
import UXdesign from './homePage/UXdesign'
import { Layout } from './Layout'
import './css/homePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Partner />
                <Implementation />
                <UXdesign />
            </Layout>
        )
    }
}
