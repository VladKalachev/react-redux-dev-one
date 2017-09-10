import React, {Component} from 'react'
import ArticleList from './ArticleList'
import CommentList from './CommentList'

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
        const { isOpen, isOpenComment, visibel } = this.state
        

        const btnTitle = !isOpen ? 'Open' : 'Close'
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
        
        if(!this.state.isOpen) return null

        const {article} = this.props
        return (
                <section>
                    {article.text}
                    <CommentList comments={article.comments} />
                </section>
            )
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


