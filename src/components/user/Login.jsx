import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import logo from '../../images/logo.png'
import requester from '../../infrastucture/requester'
import observer from '../../infrastucture/observer'

export default class Login extends Component {
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
    this.setState({ [fieldName]: fieldValue})
  }

  handleSubmit = ev => {
    ev.preventDefault()

    requester.post('user', 'login', 'basic', this.state).then(result => {
      console.log(result)
      observer.trigger(observer.events.loginUser, result.username)
      sessionStorage.setItem('authtoken', result._kmd.authtoken)
      sessionStorage.setItem('username', result.username)
    }).catch((err) => {
      if (err) {
        console.log(err)
      }
      })
      this.setState({username:'', password:''})
  }
  render () {
    return (
      <section id='banner'>
        <div className='container'>
          <div className='sign-up-form'>
            <a href='index.html' className='logo'><img src={logo} alt='Lance Feed' /></a>
            <h2 className='text-white'>Sign In</h2>
            <NavLink to='/' ><h4 ><i className='ion-android-home' />Go Home</h4></NavLink>
            <div className='line-divider' />
            <div className='form-wrapper'>
              <p className='signup-text'>Join our community</p>
              <form onSubmit = {this.handleSubmit}>
                <fieldset className='form-group'>
                  <input name="username" type='text' className='form-control' onChange={this.handleChange} id='example-name' placeholder='Enter username' />
                </fieldset>
                <fieldset className='form-group'>
                  <input name="password" type='password' className='form-control' onChange={this.handleChange} id='example-password' placeholder='Enter a password' />
                </fieldset>
              <input className='btn-secondary' type='submit' value='Sign in' />
              </form>
            </div>
            <NavLink to='/register'>You do not have an account ?</NavLink>
          </div>
        </div>
      </section>
    )
  }
}
