import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from './../decorators/toggleOpen'

class Artical extends Component {

    constructor(props){
        super(props)

        this.state = {
            visibel : true
        }
    }

    render(){
        const { article, isOpen, toggleOpen } = this.props
  
        const { visibel } = this.state
        
        const btnTitle = !isOpen ? 'Open' : 'Close'
        const hiddenClass = visibel ? 'visibel' : 'no-visibel'
  
        return(
                <div className={hiddenClass} ref={this.setContainerRef}>
                    <h1>{article.title}</h1>
                    <button onClick={toggleOpen} >{btnTitle}</button><br />
                    <button onClick={this.onDelete}>Удалить</button>
                    {this.getBody()}       
                </div>
    )}

    setContainerRef = ref =>{
        this.container = ref
        console.log('---', ref)
    }

    getBody(){
        const {article, isOpen} = this.props
        if(!isOpen) return null

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


}

export default Artical