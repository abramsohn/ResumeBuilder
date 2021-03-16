import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
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
      <Router>
        <div className='container'>
          < Header
            handleChangeForm={this.handleChangeForm}
          />
            <Switch>
              <Route exact path="/">
                <main className="row">
                  <div className="master-resume six columns">
                    < MasterResume />
                  </div>
                  <div className="six columns">
                    <Form
                      currentForm={this.state.currentForm}
                      handleNewSummery={this.handleNewSummery}
                    />
                  </div>
                </main>
              </Route>
              <Route path="/signup">
                <NewUserForm />
              </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;