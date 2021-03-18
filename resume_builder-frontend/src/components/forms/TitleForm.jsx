import React, { Component } from 'react'
import history from '../history';


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class ResumeForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value}) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseURL + '/resumes', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(jsonRes => {
                history.push('/')

                // this.setState({
                    // title: '',
                    // summery: '',
                    // school: '',
                    // yearsAttended: '',
                    // degree: '',
                    // placeOfWork: '',
                    // yearsWorked: '',
                    // listPoints: '',
                    // skills:''
                // })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
            return (  
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Professional Title</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="title" value={this.state.title} /> 

                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default ResumeForm