import React, { Component } from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history';
import Header from './components/Header'
import MasterResume from './components/MasterResume'
import Form from './components/Form'
import NewUserForm from './components/forms/NewUserForm'
import LoginForm from './components/forms/LoginForm'

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

  setToken = (userToken) => {
    this.setState({token: userToken})
    history.push('/')
  }

  clearToken = () => {
    this.setState({token: undefined})
    history.push('/')
  }

  render() {
    return (
      <Router history={history}>
        <div className='container'>
          < Header
            token={this.state.token}
            clearToken={this.clearToken}
            handleChangeForm={this.handleChangeForm}
          />
          <Switch>
            <Route path="/signup">
                <NewUserForm setToken={this.setToken}/>
            </Route>
            <Route path="/signin"> 
                <LoginForm setToken={this.setToken} />
              </Route>
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
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;