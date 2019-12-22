import React, { Component } from 'react';
/*Libarys */
import { connect } from 'react-redux'
/*Actions */
/* import { autorizated, registrated } from '../../API/api'
 */


export default class Message extends Component {


  render() {
    
    return (
      <div className="message">
        <div className="message_userName">
          <strong>{this.props.dataMessage.messageUserName}</strong>: {this.props.dataMessage.messageText}
        </div>
      </div>
    )
  }
}

