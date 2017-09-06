import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';

import Header from './components/Header';

import logo from './logo.svg';
import './App.css';

const { Footer, Sider, Content } = Layout;

class App extends Component {

  render() {
    const styleSider = { height: "100%", overflow: 'auto'};
    return (

        <Spin spinning={false} size="large" tip="Загрузка...">
          <Layout>
            <Header />
          </Layout>
        </Spin>
      );
  }
}

export default App;
