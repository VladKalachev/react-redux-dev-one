import React, {Component} from 'react'
import Article from './Article'

export default function ArticleList({articles}){
    console.log({articles})
    return (
        <ul>
            {
                articles.map((article, i)=>
                    <li key={i}><Article article={article} /></li>
                )
            }
           
        </ul>
    )
}