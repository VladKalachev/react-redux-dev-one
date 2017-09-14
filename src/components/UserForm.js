import React, { Component } from "react"

class UserForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: '',
            text: ''
        }
    }
    
    render(){
        return (
            <div>
                Name:
                <input type="text" value={this.state.username} onChange={this.handelUserChange} />
                {this.state.text}
            </div>
        )
    }

    handelUserChange = (ev) =>{
        if(ev.target.value.length > 5){
                this.setState({
                text: "Больше 5"
            })
        } else if(ev.target.value.length == 0 || ev.target.value.length >= 5){
            this.setState({
                text: ""
            })
        }
       

        
        if(ev.target.value.length > 10) return
        
        this.setState({
            username: ev.target.value
        })
    }
}

export default UserForm