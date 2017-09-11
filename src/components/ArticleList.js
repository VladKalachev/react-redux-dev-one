import React, {Component} from 'react'
import Article from './Article'


export default class ArticleList extends Component {

    state = {
        openArticleId: null
    }

    render(){
        const articleElements = this.props.articles.map(article => 
             <li key={article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === this.state.openArticleId}
                    toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        ) 
    }

    toggleOpenArticle(openArticleId){
        console.log(openArticleId)
        this.setState({ openArticleId })
    }
    
}

// export default function ArticleList({articles}){
    
//     const listAtricles = articles.map((article)=>
//         <li key={article.id}>
//             <Article article={article} />
//         </li>
//     )
//     return (
//         <ul>{listAtricles}</ul>
//     )
// }

// export default function ArticleList(props){
//     const {articles} = props
//     return (
//         <ul>
//             {
//                 articles.map((article, i)=>
//                     <li key={i}><Article article={article} /></li>
//                 )
//             }
           
//         </ul>
//     )
// }