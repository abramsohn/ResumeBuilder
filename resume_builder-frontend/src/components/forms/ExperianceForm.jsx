import React, { Component } from 'react'
import history from '../history';

class ExperianceForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            placeOfWork: '',
            yearsWorked: '',
            listPoints: '',
        }
    }

    componentDidMount() {
        // this.setState({
            // placeOfWork: this.props.placeOfWork,
            // yearsWorked: this.props.yearsWorked,
            // listPoints: this.props.listPoints,
        // })
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value}) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const experiance = {
            placeOfWork: this.state.placeOfWork,
            yearsWorked: this.state.yearsWorked,
            listPoints: this.state.listPoints,
        }
        this.props.handleExperianceAdd(experiance)
    }

    render() {
            return (  
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Experience:</legend>
                        <div className="row">
                            <div className="eight columns">
                                <label htmlFor="placeOfWork">Work Place</label>
                                <input type="text" className="u-full-width" onChange={this.handleChange} id="placeOfWork" value={this.state.placeOfWork} />
                            </div>

                            <div className="four columns">
                                <label htmlFor="yearsWorked">Years</label>
                                <input type="text" className="u-full-width" onChange={this.handleChange} id="yearsWorked" value={this.state.yearsWorked} />
                            </div>
                        </div>
                        
                        <label htmlFor="listPoints">Details</label>
                        <input type="text" className="u-full-width" onChange={this.handleChange} id="listPoints" value={this.state.listPoints} />
                    </fieldset>

                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default ExperianceForm