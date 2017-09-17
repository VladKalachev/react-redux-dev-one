import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './../CommentList'
import toggleOpen from './../../decorators/toggleOpen'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'

class Artical extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const { article, isOpen, toggleOpen } = this.props

        const btnTitle = !isOpen ? 'Open' : 'Close'

        return(
                <div ref={this.setContainerRef}>
                    <h1>{article.title}</h1>
                    <button onClick={toggleOpen} >{btnTitle}</button><br />

                  <button onClick={this.handelDelite}>Удалить</button>

                  {this.getBody()}
                </div>
    )}

    setContainerRef = ref =>{
        this.container = ref
       // console.log('---', ref)
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

    handelDelite = () =>{
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('----', 'deletign')
    }

}

export default connect(null, {deleteArticle})(Artical)
