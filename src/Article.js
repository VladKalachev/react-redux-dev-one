import React, {Component} from 'react';
import ArticleList from './ArticleList'


export default class Artical extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            visibel : true
        }
    }

    render(){
        const { article } = this.props
        const { isOpen, visibel } = this.state

        const btnTitle = !isOpen ? 'Open' : 'Close'
    
        console.log(this.state.visibel)
        const hiddenClass = visibel ? 'visibel' : 'no-visibel'
  
        return(
                <div className={hiddenClass}>
                    <h1>{article.title}</h1>
                    <button onClick={this.onToggle} >{btnTitle}</button><br />
                    <button onClick={this.onDelete}>Удалить</button>
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

    onDelete = () =>{
        this.setState({
            visibel: false
        })    
    }
    onToggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    } 

}


