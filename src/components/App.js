import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Article from './Article'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Counter from './Counter'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



class App extends Component{


  render(){

    return(
      <div>
        <Counter />
        <UserForm />
        <DayPicker month={ new Date(2018, 8)} />
        <ArticleList/>
      </div>
    )
  }

}

export default App
