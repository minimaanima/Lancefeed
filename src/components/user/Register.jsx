import React, { Component } from 'react'
import logo from '../../images/logo.png'
import {NavLink} from 'react-router-dom'

import requester from '../../infrastucture/requester'
import observer from '../../infrastucture/observer'

export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = ev => {
    let fieldName = ev.target.name
    let fieldValue = ev.target.value
    this.setState({[fieldName]: fieldValue})
  }
  handleSubmit = ev => {
    ev.preventDefault()
    requester.post('user', '', 'basic',this.state).then(result => {
      console.log(result)
      observer.trigger(observer.events.loginUser, result.username)
      sessionStorage.setItem('authtoken', result._kmd.authtoken)
    })
  }
  render () {
    return (
      <section id='banner'>
        <div className='container'>
          <div className='sign-up-form'>
            <a href='index.html' className='logo'><img src={logo} alt='Lance Feed' /></a>
            <h2 className='text-white'>Register</h2>
            <NavLink to='/' ><h4 ><i className='ion-android-home' />Go Home</h4></NavLink>
            <div className='line-divider' />
            <div className='form-wrapper'>
              <p className='signup-text'>Join our community</p>
              <form onSubmit={this.handleSubmit}>
                <fieldset className='form-group'>
                  <input type='text' name ="username" className='form-control' onChange={this.handleChange} placeholder='Enter name' />
                </fieldset>
                <fieldset className='form-group'>
                  <input type='password' name="password" className='form-control' onChange={this.handleChange} placeholder='Enter a password' />
                </fieldset>
                <p>By signning up you agree to the terms</p>
              <input className='btn-secondary' type="submit" value="Signup"/>
              </form>
            </div>
            <NavLink to='/login'>Already have an account?</NavLink>
          </div>
        </div>
      </section>
    )
  }
}
