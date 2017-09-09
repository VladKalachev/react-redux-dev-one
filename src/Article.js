import React, {Component} from 'react';
import ArticleList from './ArticleList'

export default class Artical extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render(){
        const { article } = this.props
        const { isOpen } = this.state

        const btnTitle = !isOpen ? 'Open' : 'Close'

        return(
                <div>
                    <h1>{article.title}</h1>
                    <button onClick={this.onToggle} >{btnTitle}</button>
                    {this.getBody()}
                </div>
    )}

    getBody(){
        const { article } = this.props

        if(!this.state.isOpen){
            return null
        } else {
            return <p>{article.text}</p>
        }
    }

    onToggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    } 

}


