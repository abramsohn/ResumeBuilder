import React, { Component } from 'react'
import history from '../history';


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
            title: '',
            summery: '',
            school: '',
            yearsAttended: '',
            degree: '',
            placeOfWork: '',
            yearsWorked: '',
            listPoints: '',
            skills:''
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
                userId: this.props.user.token,
                title: this.state.title,
                summery: this.state.summery,
                school: this.state.school,
                yearsAttended: this.state.yearsAttended,
                degree: this.state.degree,
                placeOfWork: this.state.placeOfWork,
                yearsWorked: this.state.yearsWorked,
                listPoints: this.state.listPoints,
                skills: this.state.skills,
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
                    <label htmlFor="summery">Summery</label>
                    <textarea className="u-full-width" onChange={this.handleChange} id="summery" value={this.state.summery}></textarea>

                    <input className="u-full-width button-primary" type="submit" value="Submit" />
                </form>
            )
        } 
    }

export default SummeryForm