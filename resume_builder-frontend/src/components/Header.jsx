import React, { Component } from 'react'

class Header extends Component{
    render() {
        return (
            <header>
                <nav className="nav-main">
                    <div>
                        <a className="logo" href='/'><h1>Resume Builder</h1></a>
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