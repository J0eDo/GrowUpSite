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