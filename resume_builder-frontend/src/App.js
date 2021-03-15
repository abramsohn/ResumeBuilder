import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: [],
    }
  }

  render() {
    return (
      <div className='container'>
        < Header />
      </div>
    )
  }

}
export default App;