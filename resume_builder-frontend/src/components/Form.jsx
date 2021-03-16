import React, { Component } from 'react'

class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {
            summery: '',
            placeOfWork: '',
            yearsWorked: '',
            listPoints:'',
        }
    }

    handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value}) 
    }
    
    render() {
        if(this.props.currentForm === 'summery') {
            return (<form>
                <label htmlFor="summery">summery</label>
                <textarea className="u-full-width" onChange={this.handleChange} id="summery" value={this.state.summery}>  </textarea>
                <input className="u-full-width button-primary" type="submit" value="Submit" />
            </form>)
        } else if (this.props.currentForm === 'experience') {
            return (<form>
                <label htmlFor="placeOfWork">Work Place</label>
                <input type="text" className="u-full-width" onChange={this.handleChange} id="placeOfWork" value={this.state.placeOfWork} />
                 
                <label htmlFor="yearsWorked">Years</label>
                <input type="text" className="u-full-width" onChange={this.handleChange} id="yearsWorked" value={this.state.yearsWorked} />
                 
                <label htmlFor="listPoints">Details</label>
                <input type="text" className="u-full-width" onChange={this.handleChange} id="listPoints" value={this.state.listPoints} />
                 
                <input className="u-full-width button-primary" type="submit" value="Submit" />
            </form>)
        } else {
            return (
                    ''
                )
            }
        } 
    }

export default Form