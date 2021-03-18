import React, { Component } from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history';
import Header from './components/Header'
import HomePage from './components/HomePage'
// import MasterResume from './components/MasterResume'
import ResumeForm from './components/forms/ResumeForm'
import Resumes from './components/Resumes'
import Resume from './components/Resume'

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
      user: {
        token: "",
        firstName: "",
        lastName: "",
      }    
    }
  }

  componentDidMount() {
    this.authoerizeUser();
    this.getResumes();
  }

  componentWillMount() {
  }

  getResumes = () => {
    fetch(baseURL + '/resumes')
      .then(data => data.json(), error => console.log(error))
      .then(parsedData => this.setState({resumes: parsedData}), error => console.log(error))
  }

  handleNewTitle = (newTitle) => {
    this.setState({title: newTitle})
  }

  authoerizeUser =  () => {
    this.setState({
      user: this.getUser() ,
    });
  }

  setUser = (userDetails) => {
     sessionStorage.setItem('user', JSON.stringify(userDetails));
    
    history.push('/')
  }

  getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'))
  }

  clearToken = () => {
    sessionStorage.clear();
    this.setState({
      user: {
        token: undefined,
        firstName: '',
        lastName: '',
      }
      
    })
    history.push('/')
  }

  render() {
    return (
      <Router history={history}>
        <div className='container'>
          < Header
            user={this.state.user}
            clearToken={this.clearToken}
            handleChangeForm={this.handleChangeForm}
          />
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>

            <Route path="/signup">
              <NewUserForm
                setUser={this.setUser} />
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

            <Route exact path="/resumes">
              <Resumes
                user={this.state.user}
                resumes={this.state.resumes}
              />
            </Route>
            
            <Route path="/Resumes/:_id">
              <Resume
                user={this.state.user}
                resumes={this.state.resumes}
              />
            </Route>

            <Route path="/form">
              < ResumeForm
                  user={this.state.user}
                /> 
            </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;