import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'

export default class Header extends Component {
  render () {
    return (
      <header id='header'>
        <nav className='navbar navbar-default navbar-fixed-top menu'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
              </button>
              <NavLink className='navbar-brand' to='/'><img src={logo} alt='logo' /></NavLink>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav navbar-right main-menu'>
                <li className='dropdown'><NavLink to='/newsfeed'>Newsfeed</NavLink></li>
                <li className='dropdown'><NavLink to='/profile'>Profile</NavLink></li>
                <li className='dropdown'><NavLink to='/logout'>Logout</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
