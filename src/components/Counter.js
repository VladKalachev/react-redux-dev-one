import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {

  static PropsTypes = {
    counter: PropsTypes.number
  }

  render () {
    console.log(this.props)
    return(
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    )
  }

  handleIncrement = () =>{
    console.log('---', 'íncremetn')
    const {increment} = this.props
    increment()

  }
}


export default connect((state)=>({
   counter: state.count
}), {increment})(Counter)
