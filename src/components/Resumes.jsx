import React, { Component } from 'react'

class Resumes extends Component{


    render() {
        return (
            <div>
                <h2>Here is a list of resumes</h2>
                <ul>
                {this.props.resumes.map(resume => {
                    return (<li key={resume._id}>{resume.title}</li>)
                })}
                </ul>
            </div>
        ); 
    }
}

export default Resumes