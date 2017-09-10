import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Comment from './Comments' 

export default class Artical extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            visibel : true,
            isOpenComment: false
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
        const { article } = this.props
        const comments = article.comments
        const listComment = !this.state.isOpenComment ? null : <Comment  comment={comments} />  
        const btn = !this.state.isOpenComment ? 'Open Comment' : 'Close Comment'
        
        if(!this.state.isOpen){
            return null
        } else {
            return (
                <div>
                    <p>{article.text}</p>

                    {/* comment component */}
                    <button onClick={this.openComment}>{btn}</button>
                    {listComment} 
                </div>
            )
        }
    }
    openComment = ()=>{
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
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


