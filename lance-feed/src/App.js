import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Register from './components/user/Register'
import Copyright from './components/Common/Copyright'
import Login from './components/user/Login'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Profile from './components/Profile/Profile'
import Newsfeed from './components/Pages/NewsFeed/Newsfeed'
import Timeline from './components/Pages/Timeline/Timeline'

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/' exact component={LandingPage} />
        <Route path='/register' render={props =>
          <div>
            <Register />
            <Copyright />
          </div>
        } />
        <Route path='/profile' component={Profile} />
        <Route path='/login' render={props =>
          <div>
            <Login />
            <Copyright />
          </div>
        } />
        <Route path='/newsfeed' component={Newsfeed} />
        <Route path='/timeline' component={Timeline} />
      </div>
    )
  }
}

export default App
