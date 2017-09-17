import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Article from './Article'
import ArticleList from './ArticleList'
import Filters from './Filters'
import Counter from './Counter'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component{


  render(){

    const {articles} = this.props

    return(
      <div>
        <Counter />
        <Filters />
        <ArticleList/>
      </div>
    )
  }

}

export default App
