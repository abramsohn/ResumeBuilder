import React, { Component } from 'react'
import Header from './components/Header'
import MasterResume from './components/MasterResume'
import Form from './components/Form'
import NewUserForm from './components/forms/NewUserForm'

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

  handleNewSummery = (newSummery) => {
    this.setState({summery: newSummery})
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
              currentForm={this.state.currentForm}
              handleNewSummery={this.handleNewSummery}
            />
          </div>
        </main>
      </div>
    )
  }

}
export default App;