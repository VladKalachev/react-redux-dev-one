import React, {Component} from 'react';


export default class Artical extends Component {
    
    render(){
        const title = 'Hello World'
        const names = ['Влад','Петя','Георг']
        return(
            <div>
                <h1>{title}
                    {names.map((name, i)=>
                        <li key={i}>{name}</li>
                    )}</h1>

                <p>Text</p>
            </div>
        )}
}

// export default function Artical(props){
//     //console.log(props)
//     const articles = props.article
//     console.log(articles)
//     return(
//         <div>
//             {articles.map((article, i)=>
//                 <li key={i}>
//                     {article.title}<br />
//                     {article.text}<br />
//                     {article.date}
//                 </li>
//             )}
           
//         </div>
//     )
// }
