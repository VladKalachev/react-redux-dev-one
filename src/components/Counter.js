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
    //this.props.dispatch(increment());
    // this.props.dispatch({
    //   type: "INCREMENT"
    // })
  }
}


// const mapToDispatch = {
//     dispatchIncrement: increment
// }

// const mapToDispatch = {increment}
//
// function mapStateToProps(state) {
//   return{
//     counter: state.count
//   }
// }
// const decortor = connect(mapStateToProps, mapToDispatch )
//
// export default decortor(Counter);

export default connect((state)=>({
   counter: state.count
}), {increment})(Counter)
