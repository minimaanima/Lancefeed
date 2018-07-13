import React, {Component} from 'react'

export default class Features extends Component {
  render () {
    let projectNumbers = 99999
    return (
      <section id='features'>
        <div className='container wrapper'>
          <h1 className='section-title slideDown'>Lance Feed</h1>
          <h2 className='sub-title'>find awesome projects</h2>
          <div id='incremental-counter' data-value={projectNumbers} />
        </div>
      </section>
    )
  }
}
