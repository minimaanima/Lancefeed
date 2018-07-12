import React, {Component} from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'

export default class Timeline extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1 style={{'text-align': 'center'}}>Еми няма време за Историята с публикации :(</h1>
        <img className='center' src='https://s-i.huffpost.com/gen/2016406/thumbs/o-TUCKER-SAD-CAT-570.jpg?6' />
        <Footer />
      </div>
    )
  }
}
