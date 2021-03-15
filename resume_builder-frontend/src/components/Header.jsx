import React, { Component } from 'react'

class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {
            masterDropdown: true,
        }
    }

    handleDropdown = () => {
        if (this.state.masterDropdown) {
            this.setState({ masterDropdown: false });
        } else {
            this.setState({ masterDropdown: true });
        }
    }

    render() {
        return (
            <header>
                <nav className="nav-main">
                    <div>
                        <a className="logo" href='/'><h1>Resume Builder</h1></a>
                        <ul>
                            <li>
                                <button className="master-dropdown-button" onClick={this.handleDropdown}>Master Resume </button>
                                {this.state.masterDropdown ?
                                    <div className="master-dropdown">
                                        <ul className="dropdown">
                                            <li>Add Summary</li>
                                            <li>Add Experience</li>
                                            <li>Add Education</li>
                                            <li>Add Skill</li>
                                        </ul>
                                    </div>
                                    : ''}
                                
                            </li>
                        </ul>
                       <div className="signin-buttons">
                            <button className="button-primary">Sign Up</button>
                            <button >Log In</button>
                        </div>
                        
                    </div>
                </nav>
            </header>

        );
        
    }
}

export default Header