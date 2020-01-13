import React, { Component } from 'react'

class FlashMessage extends Component {

    constructor(props) {
        super(props)
        this.body = props.bodyEvent
    }

    getBody() {
        switch (this.body.event) {
            case "USER_ONLINE":
                return <p><strong>{this.body.userName}</strong> онлайн!</p>
            case "ADD_FRIEND":
                return <p> {this.body.friendName} добавлен(а) в друзья</p>
            case "REMOVE_FRIEND":
                return <p> {this.body.friendName} удален(а)  из друзей</p>
            default:
                break;
        }
    }

    render() {
        return (
            <div className="flashMessage">
                <p className="cross">X</p>
                {this.getBody()}
            </div>)
    }
}


export default FlashMessage