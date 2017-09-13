import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Article from './Article'
import { articles } from './../fixtures'
import ArticleList from './ArticleList'
import UserForm from './UserForm'

export default function App(){
  return(
    <div>
      <UserForm />
      <ArticleList articles={articles} />
    </div>
  )
}

