import React, { Component } from 'react'

class MasterResume extends Component{
    constructor(props) {
        super(props)
        this.state = {
            masterDropdown: true,
        }
    }

    render() {
        return (
            <div>
                {this.props.name ? <h2 className="master-name">{this.props.name}</h2> : ''}
                {this.props.masterResume ?
                <h3 className="master-tag">{this.props.masterResume.title}</h3> : '' }
               
                <div className="master-summary">
                    {this.props.masterResume ? this.props.masterResume.summery : '' }
                </div>

                <dl className="master-skills">
                    <dt>Skills:</dt>
                    <dd>{this.props.masterResume ? this.props.masterResume.skills : ''}</dd>
                    
                </dl>
                {this.props.masterResume ?
                    <dl className="master-experience">
                        {this.props.masterResume.experience.map(job => {
                            return (
                                <React.Fragment>
                                    <dt>{ job.placeOfWork }<span className="master-experience-dates"> { job.yearsWorked }</span></dt>
                                    <dd>{job.listPoints}</dd>
                                </React.Fragment>
                            )
                        })}
                    </dl> :
                    ''}
            </div>

        );
        
    }
}

export default MasterResume