import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'

export default class Newsfeed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImage: 'https://res.cloudinary.com/minimaanima/image/upload/v1531426525/samples/people/smiling-man.jpg'
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div id='page-contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 static'>
                <div className='profile-card'>
                  <img src={this.state.profileImage} alt='user' className='profile-photo' />
                  <h5><NavLink to='/timeline' className='text-white'>Ivan Petrov</NavLink></h5>
                  <p>1,299 followers</p>
                </div>
                <ul className='nav-news-feed'>
                  <li><i className='icon ion-ios-paper' /><div><NavLink className='nav' to='/'>Home</NavLink></div></li>
                  <li><i className='icon ion-ios-people' /><div><NavLink to='/profile'>My Profile</NavLink></div></li>
                </ul>
              </div>
              <div className='col-md-7'>
                <div className='create-post'>
                  <div className='row'>
                    <div className='col-md-7 col-sm-7'>
                      <div className='form-group'>
                        <img src={this.state.profileImage} alt='profile' className='profile-photo-md' />
                        <textarea name='texts' id='exampleTextarea' cols={30} rows={1} className='form-control' placeholder='Write what you wish' defaultValue={''} />
                      </div>
                    </div>
                    <div className='col-md-5 col-sm-5'>
                      <div className='tools'>
                        <button className='btn btn-primary pull-right'>Publish</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-content'>
                  <div className='post-container'>
                    <img src='images/users/user-9.jpg' alt='user' className='profile-photo-md pull-left' />
                    <div className='post-detail'>
                      <div className='user-info'>
                        <h5><a href='timeline.html' className='profile-link'>Anna Young</a> <span className='following'>following</span></h5>
                        <p className='text-muted'>Published a photo about 4 hour ago</p>
                      </div>
                      <div className='reaction'>
                        <a className='btn text-green'><i className='icon ion-thumbsup' /> 2</a>
                        <a className='btn text-red'><i className='fa fa-thumbs-down' /> 0</a>
                      </div>
                      <div className='line-divider' />
                      <div className='post-text'>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                      </div>
                      <div className='line-divider' />
                      <div className='post-comment'>
                        <img src='images/users/user-10.jpg' alt='alabala' className='profile-photo-sm' />
                        <p><a href='timeline.html' className='profile-link'>Julia </a>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                      </div>
                      <div className='post-comment'>
                        <img src={this.state.profileImage} alt='another sasa' className='profile-photo-sm' />
                        <input type='text' className='form-control' placeholder='Post a comment' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-2 static'>
                <div className='suggestions' id='sticky-sidebar'>
                  <h1>
                You can post your ad here :)
                  </h1>
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
