import React, { Component } from "react"

class UserForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
    }
    
    render(){
        return (
            <div>
                Name:
                <input type="text" value={this.state.username} onChange={this.handelUserChange} />
            </div>
        )
    }

    handelUserChange = (ev) =>{
        if(ev.target.value.length > 10) return
        
        this.setState({
            username: ev.target.value
        })
    }
}

export default UserForm