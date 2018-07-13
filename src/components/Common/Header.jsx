import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'
import observer from '../../infrastucture/observer'
import requester from '../../infrastucture/requester'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
    observer.subscribe(observer.events.loginUser, this.userLoggedIn)
  }
  userLoggedIn = username => {
    this.setState({username})
  }
  clearUsername = () => {
    this.setState({username: ''})
    requester.post('user','_logout','kinvey')
    sessionStorage.clear()
  }
  render () {
    let username = sessionStorage.getItem('username')
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
                {username ? <li className='dropdown'><NavLink to='/profile'>Hello {username}</NavLink></li> : <li className='dropdown'><NavLink to='/login'>Sign In</NavLink></li>}
                <li className='dropdown'><NavLink to='/newsfeed'>Newsfeed</NavLink></li>
                <li className='dropdown'><NavLink to='/profile'>Profile</NavLink></li>
                {username ? <li className='dropdown'><NavLink to='/logout' onClick={this.clearUsername}>Logout</NavLink></li> : ''}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
