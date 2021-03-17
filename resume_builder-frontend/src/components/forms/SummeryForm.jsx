import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class SummeryForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            summery: ''
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
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(createdSummery => {
                this.props.handleNewSummery(createdSummery);
                this.setState({ summery: '' })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
            return (  
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="summery">summery</label>
                    <textarea className="u-full-width" onChange={this.handleChange} id="summery" value={this.state.summery}>  </textarea>
                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default SummeryForm