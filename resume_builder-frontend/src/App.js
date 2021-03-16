import React, { Component } from 'react'
import Header from './components/Header'
import MasterResume from './components/MasterResume'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: [],
      currentForm: '',
    }
  }

  handleChangeForm = (formType) => {
    this.setState({ currentForm: formType });
  }

  render() {
    return (
      <div className='container'>
        < Header
          handleChangeForm={this.handleChangeForm}
        />
        
        <main className="row">
          <div className="master-resume six columns">
            < MasterResume />
          </div>
          <div className="six columns">
            < Form
                currentForm = {this.state.currentForm}
            />
          </div>
        </main>
      </div>
    )
  }

}
export default App;