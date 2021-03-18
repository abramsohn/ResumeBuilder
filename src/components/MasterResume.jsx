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
                <h2 className="master-name">{`${this.props.firstName} ${this.props.lastName} ` }</h2>
                <h3 className="master-tag">Lumberjack, Singer-Songwriter</h3>
                <div className="master-summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <dl className="master-skills">
                    <dt>Skills:</dt>
                    <dd>A skill</dd>
                    <dd>Another skill</dd>
                    <dd>Yet another skill</dd>
                </dl>
                <dl className="master-experience">
                    <dt>Lumber Yard <span className="master-experience-dates"> 1999-2021</span></dt>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi.</dd>
                    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi.</dd>
                </dl>
            </div>

        );
        
    }
}

export default MasterResume