import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class ExperianceForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            placeOfWork: '',
            yearsWorked: '',
            listPoints:'',
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
                placeOfWork: this.state.placeOfWork,
                yearsWorked: this.state.yearsWorked,
                listPoints: this.state.listPoints,
            }),
            Headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(createdExperiance => {
                this.props.handleNewSummery(createdExperiance);
                this.setState({ placeOfWork: '', yearsWorked: '', listPoints:'' })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
            return (
                <form>
                    <label htmlFor="placeOfWork">Work Place</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="placeOfWork" value={this.state.placeOfWork} />
                 
                    <label htmlFor="yearsWorked">Years</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="yearsWorked" value={this.state.yearsWorked} />
                    
                    <label htmlFor="listPoints">Details</label>
                    <input type="text" className="u-full-width" onChange={this.handleChange} id="listPoints" value={this.state.listPoints} />
                    
                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default ExperianceForm