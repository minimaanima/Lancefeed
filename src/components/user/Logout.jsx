import React, {Component} from 'react'
import requester from '../../infrastucture/requester'
import {Redirect} from 'react-router-dom'

export default class Logout extends Component {
  logout = () => {
    requester.post('user', '_logout', 'kinvey').then(res => sessionStorage.removeItem('authtoken'))
  }
  render = () => <Redirect to='/' />
}