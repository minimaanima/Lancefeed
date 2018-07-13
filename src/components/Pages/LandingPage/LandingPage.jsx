import React, {Component} from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import Features from './Features'
import Register from '../../user/Register'

export default class LandingPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <Register />
        <Features />
        <Footer />
      </div>
    )
  }
}
