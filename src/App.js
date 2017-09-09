import React, { Component } from 'react';
import { connect } from 'react-redux';

const user = {
  name: 'Vlad',
  firstName: 'Kalachev'
}

function nameUser(user){
  return user.name + user.firstName
}

const namber = [1,2,4]

function App(){
  return <h1>Hello Wold :{user.firstName}</h1>
}

export default App;
