import React, {Component} from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {

    render(){
        const { articles, openItemId, toggleOpenItem } = this.props

        const articleElements = articles.map(article =>
             <li key={article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }


}
export default connect(state => ({
  articles: state.articles
}))(accordion(ArticleList))
