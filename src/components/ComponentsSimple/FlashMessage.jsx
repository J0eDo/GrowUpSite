import React, { Component } from 'react'

class FlashMessage extends Component {

    constructor(props) {
        super(props)
        this.body = props.bodyEvent
    }

    getBody() {
        switch (this.body.event) {
            case "USER_ONLINE":
                return (
                    <div className="flashMessage"
                    style={{ backgroundColor: 'blue' }}
                    >
                        <p><strong>{this.body.userName}</strong> онлайн!</p>
                    </div>
                )
            case "ADD_FRIEND":
                return (<div className="flashMessage"
                    style={{ backgroundColor: 'blue' }}
                >
                    <p> {this.body.friendName} добавлен(а) в друзья</p>
                </div>)
            case "REMOVE_FRIEND":
                return (
                    <div className="flashMessage"
                        style={{ backgroundColor: 'yellow' }}
                    >
                        <p> {this.body.friendName} удален(а)  из друзей</p>
                    </div>)
            default:
                break;
        }
    }

    render() {
        return (
            <div className="flashMessage">
                {this.getBody()}
            </div>)
    }
}


export default FlashMessage