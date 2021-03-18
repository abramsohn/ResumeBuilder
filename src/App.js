import React, { Component } from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history';
import Header from './components/Header'
import HomePage from './components/HomePage'
// import MasterResume from './components/MasterResume'
import ResumeForm from './components/forms/ResumeForm'
import Resumes from './components/Resumes'

import NewUserForm from './components/forms/NewUserForm'
import LoginForm from './components/forms/LoginForm'


let baseURL = '';
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumes: [],
      token: "",
      firstName: "",
      lastName: "",
      masterResume: ""
    }
  }

  componentDidMount() {
    this.getResumes();
  }

  getResumes = () => {
    fetch(baseURL + '/resumes')
      .then(data => data.json(), error => console.log(error))
      .then(parsedData => this.setState({resumes: parsedData}), error => console.log(error))
  }

  handleNewTitle = (newTitle) => {
    this.setState({title: newTitle})
  }

  setUser = (userDetails) => {
    // this.setState({token: userToken})
    this.setState({
      token: userDetails.token,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      masterResume: userDetails.masterResume,
    })
    history.push('/master')
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
            <Route exact path="/">
              <HomePage/>
            </Route>


              <Route exact path="/resumes">
                < Resumes resumes={this.state.resumes} />
              </Route>

            <Route path="/signup">
              <NewUserForm setUser={this.setUser}/>
            </Route>
            
            <Route path="/signin"> 
              <LoginForm setUser={this.setUser} />
            </Route>

            {/* <Route exact path="/master"> */}
              {/* < MasterResume */}
                  {/* firstName={this.state.firstName} */}
                  {/* lastName={this.state.lastName} */}
                  {/* masterResume={this.state.masterResume} */}
                {/* /> */}
            {/* </Route> */}

            <Route path="/form">
              < ResumeForm
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  masterResume={this.state.masterResume}
                /> 
            </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;