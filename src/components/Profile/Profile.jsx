import React, { Component } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PersonalInfo from './PersonalInfo'
import EditProfile from './EditProfile'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImage: 'https://res.cloudinary.com/minimaanima/image/upload/v1531426527/samples/people/boy-snow-hoodie.jpg',
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
  gotoEdit = () => {
    return (
      <EditProfile /> 
    )
  }
  render () {
    
    return (
      <div>
        <Header />
        <PersonalInfo onClick={this.gotoEdit} name={this.state.name} description={this.state.description} profileImage={this.state.profileImage} language={this.state.language} interests={this.state.interests} work={this.state.work} personalInfo={this.state.personalInfo} />
        <Footer />
      </div>
    )
  }
}
