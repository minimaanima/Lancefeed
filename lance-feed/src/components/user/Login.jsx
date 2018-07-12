import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'

export default class Register extends Component {
  render () {
    return (
      <section id='banner'>
        <div class='container'>
          <div class='sign-up-form'>
            <a href='index.html' class='logo'><img src={logo} alt='Lance Feed' /></a>
            <h2 class='text-white'>Login</h2>
            <NavLink to='/' ><h4 ><i class='ion-android-home' />Go Home</h4></NavLink>
            <div class='line-divider' />
            <div class='form-wrapper'>
              <p class='signup-text'>Join our community</p>
              <form action='#'>
                <fieldset class='form-group'>
                  <input type='text' class='form-control' id='example-name' placeholder='Enter email' />
                </fieldset>
                <fieldset class='form-group'>
                  <input type='password' class='form-control' id='example-password' placeholder='Enter a password' />
                </fieldset>
              </form>
              <button class='btn-secondary'>Login</button>
            </div>
            <NavLink to='/register'>You do not have an account ?</NavLink>
          </div>
        </div>
      </section>
    )
  }
}
