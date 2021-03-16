import React, { Component } from 'react'
import SummeryForm from './forms/SummeryForm'
import ExperianceForm from './forms/ExperianceForm'
import EducationForm from './forms/EducationForm'
import SkillsForm from './forms/SkillsForm'


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value}) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseURL + '/resumes', {
            method: 'POST',
            body: JSON.stringify({ summery: this.state.summery }),
            Headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(createdSummery => {
                this.props.handleNewSummery(createdSummery);
                this.setState({ summery: '' })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
        switch (this.props.currentForm) {
            case 'summery':
                return (< SummeryForm
                    handleNewSummery={this.props.handleNewSummery}
                />);
            case 'experience':
                return ( < ExperianceForm /> );
            
            case 'education':
                return (< EducationForm />);
            
            case 'skills':
                return (< SkillsForm />);
            
            default: return ('')
        }


    } 
}

export default Form