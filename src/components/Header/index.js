import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spin, Switch, Alert, Layout, Icon, Button, Dropdown, Row, Col, Menu, Input, Select, Radio } from 'antd'
import { changeMessage, changeToggle } from '../../actions/app'

class Header extends Component {

   
      hendleChange = () =>{
        this.props.changeMessage('Привет Влад');
      }

      hendleChangeInput = (e) =>{
        console.log(e.target.value)
        this.props.changeMessage(e.target.value);
      }
      toggle = (value) =>{
        console.log(value)
        
        if(this.props.load == false){
          this.props.changeToggle(true)
        } else{
           this.props.changeToggle(false)
        }
       
      }

    render() {
      console.log(this.props)
      const { message, animal, load } = this.props

      return (
          <div>
          
            <Spin spinning={load}>
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
              />
            </Spin>

          <div style={{ marginTop: 16 }}>
            Loading state：<Switch checked={load} onChange={this.toggle} />
          </div>
        


            <Button onClick={this.hendleChange}>Заменить</Button>
            <Input onChange={this.hendleChangeInput}/>
           
              <div className="header-name">{message}</div>
              <div className="header-name">{animal}</div>
            
          </div>
        );
    }
  }


const mapStateToProps = state => ({
  message: state.app.message,
  animal: state.app.animal,
  load: state.app.load
})

export default connect(mapStateToProps, { changeMessage, changeToggle  })(Header);

