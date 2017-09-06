import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,Input } from 'antd';

const { TextArea } = Input;

class Card extends Component {
  render() {
    return (
      <div className="b-inf">
          <div>

            <div className="wrapperInf">
              <strong>Дело№</strong>
              <ul>
                  <li>Номер заявления</li>
                  <li>Номер обращения</li>
              </ul>
            </div>

            <div className="wrapperInf">
              <strong>Задача: "Сведения о заявителе"</strong>
              
              <div className="b-leftInf">
                <ul>
                    <li>Исполнитель:</li>
                    <li>Дата создания:</li>
                    <li>Срок выполнения:</li>
                    <li>Дата выполнения:</li>
                </ul>
              </div>

              <div className="b-rightInf">
                <ul>
                    <li>Петров А.В.</li>
                    <li>12.09.2017 14:00</li>
                    <li>12.09.2017 14:00</li>
                    <li>12.09.2017 14:00</li>
                </ul>
              </div>
          </div>


          <div className="wrapperInf">
              <strong>Согласование</strong>
              
              <div className="b-leftInf">
                <ul>
                    <li>Петров И.И.</li>
                    <li>Андреева А.A.</li>
                    <li>Срок выполнения:</li>
                </ul>
              </div>

              <div className="b-rightInf b-rightInf--center">
                <ul>
                    <li>12.09.2017 14:00</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
              </div>
          </div>

         

         </div>
         <strong>Замечание</strong>
         <TextArea rows={2} />
         <Button className="b-btn--right" type="primary">Отправить</Button>
      </div>
    )
  }
}

export default Card;
