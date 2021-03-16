import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class EducationForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            school: '',
            yearsAttended: '',
            degree: '',
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
                school: this.state.school,
                yearsAttended: this.state.yearsAttended,
                degree: this.state.degree,
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(createdEducation => {
                this.props.handleNewSummery(createdEducation);
                this.setState({
                    school: '',
                    yearsAttended: '',
                    degree: '',
                })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
            return (  
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="school">School</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="school" value={this.state.school} />
                 
                    <label htmlFor="yearsAttended">Years</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="yearsAttended" value={this.state.yearsAttended} />
                    
                    <label htmlFor="degree">Degree</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="degree" value={this.state.degree} />
                    
                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default EducationForm