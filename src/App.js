import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Article from './Article'
import { articles } from './fixtures'

const article = articles
export default function App(){
  
  return <Article article={article} propsName={[1,2,3]} />
}

