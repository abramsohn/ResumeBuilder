import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class SkillsForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            skills: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value}) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseURL + '/resumes', {
            method: 'POST',
            body: JSON.stringify({ skills: this.state.skills }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(createdSkills => {
                this.props.handleNewSummery(createdSkills);
                this.setState({ skills: '' })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
            return (  
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="skills">Skills</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="summery" value={this.state.skills} /> 
                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default SkillsForm