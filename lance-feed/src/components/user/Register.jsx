import React, { Component } from 'react'
import logo from '../../images/logo.png'
import {NavLink} from 'react-router-dom'

export default class Register extends Component {
  render () {
    return (
      <section id='banner'>
        <div className='container'>
          <div className='sign-up-form'>
            <a href='index.html' className='logo'><img src={logo} alt='Lance Feed' /></a>
            <h2 className='text-white'>Register</h2>
            <NavLink to='/' ><h4 ><i class='ion-android-home' />Go Home</h4></NavLink>
            <div className='line-divider' />
            <div className='form-wrapper'>
              <p className='signup-text'>Join our community</p>
              <form action='#'>
                <fieldset className='form-group'>
                  <input type='text' className='form-control' id='example-name' placeholder='Enter name' />
                </fieldset>
                <fieldset className='form-group'>
                  <input type='email' className='form-control' id='example-email' placeholder='Enter email' />
                </fieldset>
                <fieldset className='form-group'>
                  <input type='password' className='form-control' id='example-password' placeholder='Enter a password' />
                </fieldset>
              </form>
              <p>By signning up you agree to the terms</p>
              <button className='btn-secondary'>Signup</button>
            </div>
            <NavLink to='/login'>Already have an account?</NavLink>
          </div>
        </div>
      </section>
    )
  }
}
