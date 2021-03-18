import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Resumes extends Component{

// let {_id} = props.match.params

    render() {
        return (
            <div>
                <h2>Here is a list of resumes</h2>
                <ul>
                {this.props.resumes.map(resume => {
                    return (
                        <li key={resume._id}>
                            <Link to={`/resumes/${resume._id}` }>
                                {resume.title}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        ); 
    }
}

export default Resumes