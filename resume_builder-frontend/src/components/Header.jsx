import React, { Component } from 'react'

class Header extends Component{
    render() {
        return (
            <header>
                <nav className="nav-main">
                    <div>
                        <a className="logo" href='/'><h1>Resume Builder</h1></a> 
                        <button className="button-primary">Sign Up</button>
                        <button >Log In</button>
                    </div>
                </nav>
            </header>

        );
        
    }
}

export default Header