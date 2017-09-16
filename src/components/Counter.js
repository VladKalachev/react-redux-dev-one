import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import {connect} from 'react-redux'
import increment from '../AC'

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
    this.props.increment()
    // this.props.dispatch({
    //   type: "INCREMENT"
    // })
  }
}

function mapStateToProps(state) {
  return{
    counter: state.count
  }
}
const decortor = connect(mapStateToProps, {increment})

export default decortor(Counter);
