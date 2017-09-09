import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Article from './Article'
import { articles } from './fixtures'
import ArticleList from './ArticleList'

export default function App(){
  return <ArticleList articles={articles} />
}

