import React, {Component} from 'react'
import Article from './Article'

export default function ArticleList({articles}){
    
    const listAtricles = articles.map((article)=>
        <li key={article.id}>
            <Article article={article} />
        </li>
    )
    return (
        <ul>{listAtricles}</ul>
    )
}

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