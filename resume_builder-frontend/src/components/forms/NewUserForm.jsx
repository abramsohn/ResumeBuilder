import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'production URL';
}


class SummeryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            city: '',
            state: ''
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseURL + '/resumes', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                city: this.state.city,
                state: this.state.state
            }),
            Headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(createdUser => {
                this.props.handleNewUser(createdUser);
                this.setState({
                    username: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    address: '',
                    phoneNumber: '',
                    city: '',
                    state: ''
                })
            }).catch(error => console.log({ 'Error': error }));
    }
    
    render() {
        return (
            <div class="form-signup">
                <form onSubmit={this.handleSubmit}>
                    <h2>Welcome</h2>
                    <label for="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        class="u-full-width"
                        name="username"
                        value={this.state.username}
                        required
                        autofocus
                    />
                    
                    <label for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        class="u-full-width"
                        name="password"
                        value={this.state.password}
                        required
                    />

                    <label for="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        class="u-full-width"
                        name="firstName"
                        value={this.state.firstName}
                        required
                    />

                    <label for="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        class="u-full-width"
                        name="lastName"
                        value={this.state.lastName}
                        required
                    />

                    <label for="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        class="u-full-width"
                        name="address"
                        value={this.state.address}
                    />

                    <label for="city">City</label>
                    <input
                        type="text"
                        id="city"
                        class="u-full-width"
                        name="city"
                        value={this.state.city}
                    />

                    <label for="state">State</label>
                    <input
                        type="text"
                        id="state"
                        class="u-full-width"
                        name="state"
                        value={this.state.state}
                    />

                    <label for="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        class="u-full-width"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                    />

                    <button class="u-full-width button-primary" type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}
export default SummeryForm