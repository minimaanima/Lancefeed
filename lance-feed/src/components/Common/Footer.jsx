import React, {Component} from 'react'
import logo from '../../images/logo-black.png'

export default class Header extends Component {
  render () {
    return (
      <footer id='footer'>
        <div className='container'>
          <div className='row'>
            <div className='footer-wrapper'>
              <div className='col-md-3 col-sm-3'>
                <a href=''><img src={logo} alt='' className='footer-logo' /></a>
                <ul className='list-inline social-icons'>
                  <li><a href='#'><i className='icon ion-social-facebook' /></a></li>
                  <li><a href='#'><i className='icon ion-social-twitter' /></a></li>
                  <li><a href='#'><i className='icon ion-social-googleplus' /></a></li>
                  <li><a href='#'><i className='icon ion-social-pinterest' /></a></li>
                  <li><a href='#'><i className='icon ion-social-linkedin' /></a></li>
                </ul>
              </div>
              <div className='col-md-2 col-sm-2'>
                <h6>For individuals</h6>
                <ul className='footer-links'>
                  <li><a href=''>Signup</a></li>
                  <li><a href=''>login</a></li>
                  <li><a href=''>Explore</a></li>
                </ul>
              </div>
              <div className='col-md-2 col-sm-2'>
                <h6>About</h6>
                <ul className='footer-links'>
                  <li><a href=''>About us</a></li>
                  <li><a href=''>Contact us</a></li>
                  <li><a href=''>Privacy Policy</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-3'>
                <h6>Contact Us</h6>
                <ul className='contact'>
                  <li><i className='icon ion-ios-telephone-outline' />+359 887 222 780</li>
                  <li><i className='icon ion-ios-email-outline' />info@lance-feed.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright'>
          <p>Lance Feed 2018 &copy; All rights reserved</p>
        </div>
      </footer>
    )
  }
}
