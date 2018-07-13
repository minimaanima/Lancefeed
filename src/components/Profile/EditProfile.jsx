import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default class EditProfile extends Component {
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
                    <img src={this.props.profileImage} alt='' class='img-responsive profile-photo' />
                    <h3>{this.props.name}</h3>
                    <p class='text-muted'>{this.props.description}</p>
                  </div>
                </div>
                <div class='col-md-9'>
                  <ul class='list-inline profile-menu'>
                    <li>
                      <NavLink to='timeline'>Timeline</NavLink>
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
                <h4>{this.props.name}</h4>
                <p class='text-muted'>{this.props.description}</p>
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
                    <p><input type='text' className='form-control' id='example-name' placeholder='Enter Personal Information' /></p>
                  </div>
                  <div class='about-content-block'>
                    <div class='about-content-block'>
                      <h4 class='grey'>
                        <i class='ion-ios-chatbubble-outline icon-in-title' />Language</h4>
                      <p><input type='text' className='form-control' id='example-name' placeholder={this.props.language.join(', ')} /></p>
                    </div>
                    <div class='about-content-block'>
                      <h4 class='grey'>
                        <i class='ion-ios-heart-outline icon-in-title' />Interests</h4>
                      <ul class='interests list-inline'>
                        <p><input type='text' className='form-control' id='example-name' placeholder={this.props.interests.join(', ')} /></p>
                      </ul>
                    </div>
                    <h4 class='grey'>
                      <i class='ion-ios-briefcase-outline icon-in-title' />Work Experiences</h4>
                    {this.props.work.map(function (job, index) {
                      return (
                        <div class='work-info' key={index}>
                          <div class='about-content-block'>
                            <p><input type='text' className='form-control' id='example-name' placeholder={job.company} /></p>
                            <p><input type='text' className='form-control' id='example-name' placeholder={job.job} /></p>
                            <p><input type='text' className='form-control' id='example-name' placeholder={job.time} /></p>
                          </div>
                        </div>
                      )
                    })}
                    <button className='btn btn-primary'>Save</button>
                    <div className='divider' />
                    <button className='btn btn-primary'>Cancel</button>
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
