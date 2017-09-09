import React, {Component} from 'react';


export default class Artical extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render(){
        const { article } = this.props
        const articles = article[0]
        console.log(this.state)
        const body = !this.state.isOpen ? (<div><h1>{articles.title}</h1><p>{articles.text}</p></div>) : null
        const btnTitle = !this.state.isOpen ? 'Close' : 'Open'
        return(
                <div>
                    {/* <button onClick={this.onToggle.bind(this)} >{btnTitle}</button> */}
                    <button onClick={this.onToggle.bind(this)} >{btnTitle}</button>
                    {body}
                    
                </div>
    )}

    onToggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    } 

    // onToggle (){
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // } 
}

// export default Article = () => {
//     return (
//         <div>
//             <h1>Title</h1>
//             <p>description</p>
//         </div>
//     )
// }

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
