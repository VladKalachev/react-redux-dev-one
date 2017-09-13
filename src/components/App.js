import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Article from './Article'
import { articles } from './../fixtures'
import ArticleList from './ArticleList'
import UserForm from './UserForm'


import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component{
  
  state = {
    selection: null
  }

  render(){
    
    const options = articles.map((article) =>({
      label: article.title,
      value: article.id
    }))

    return(
      <div>
        <Select options={options} multi value={this.state.selection} onChange={this.changeSelection}/>
        <UserForm />
        <ArticleList articles={articles} />
      </div>
    )
  }

  changeSelection = selection => this.setState({ selection })
  
}

export default App