import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import ProfileImage from '../../images/users/user-1.jpg'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'John Travolta',
      description: 'Action Hero',
      work: [
        {
          company: 'SoftUni',
          job: 'Developer',
          time: '1 year'
        },
        {
          company: 'SoftUni',
          job: 'Designer',
          time: '2 years'
        },
        {
          company: 'SoftUni',
          job: 'Developer',
          time: '1 year'
        }
      ],
      personalInfo: 'Alabalalalalalalallalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      language: ['English', 'German', 'Irish'],
      interests: ['Design', 'Proggraming', 'Something else']
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div class='timeline'>
          <div class='timeline-cover'>
            <div class='timeline-nav-bar hidden-sm hidden-xs'>
              <div class='row'>
                <div class='col-md-3'>
                  <div class='profile-info'>
                    <img src={ProfileImage} alt='' class='img-responsive profile-photo' />
                    <h3>{this.state.name}</h3>
                    <p class='text-muted'>{this.state.description}</p>
                  </div>
                </div>
                <div class='col-md-9'>
                  <ul class='list-inline profile-menu'>
                    <li>
                      <NavLink  to='timeline'>Timeline</NavLink>
                    </li>
                    <li>
                      <a href='timeline-about.html' class='active'>About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='navbar-mobile hidden-lg hidden-md'>
              <div class='profile-info'>
                <img src='images/users/user-1.jpg' alt='' class='img-responsive profile-photo' />
                <h4>{this.state.name}</h4>
                <p class='text-muted'>{this.state.description}</p>
              </div>
              <div class='mobile-menu'>
                <ul class='list-inline'>
                  <li>
                    <NavLink to='timline'>Timeline</NavLink>
                  </li>
                  <li>
                    <a href='timeline-about.html' class='active'>About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id='page-contents'>
            <div class='row'>
              <div class='col-md-3' />
              <div class='col-md-7'>
                <div class='about-profile'>
                  <div class='about-content-block'>
                    <h4 class='grey'>
                      <i class='ion-ios-information-outline icon-in-title' />Personal Information</h4>
                    <p>{this.state.personalInfo}</p>
                  </div>
                  <div class='about-content-block'>
                    <div class='about-content-block'>
                      <h4 class='grey'>
                        <i class='ion-ios-chatbubble-outline icon-in-title' />Language</h4>
                      <ul>
                        {this.state.language.map(function (language, index) {
                          return <li key={index}>{language}</li>
                        })}
                      </ul>
                    </div>
                    <div class='about-content-block'>
                      <h4 class='grey'>
                        <i class='ion-ios-heart-outline icon-in-title' />Interests</h4>
                      <ul class='interests list-inline'>
                        <ul>
                          {this.state.interests.map(function (interest, index) {
                            return <li key={index}>{interest}</li>
                          })}
                        </ul>
                      </ul>
                    </div>
                    <h4 class='grey'>
                      <i class='ion-ios-briefcase-outline icon-in-title' />Work Experiences</h4>
                    {this.state.work.map(function (job, index) {
                      return (
                        <div class='work-info' key={index}>
                          <h5>{job.company}</h5>
                          <p>{job.job} -
                          <span class='text-grey'> {job.time}</span>
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
