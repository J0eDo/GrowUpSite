import React, { Component } from 'react'
import './userPanel.scss'
import '../animation.css'
//MaterialUI
import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core/styles';
/*Libarys */
import { connect } from 'react-redux'
//Ations
import { getUserData, exitedAccount, changeSetting } from '../../API/userProfile'
//Utils
import avatarsNames from '../../util/avatarsNames'



const Panel = styled(Card)({
    backgroundColor: "rgba(12,50,200,.6)",
});

class UserPanel extends Component {

    componentDidMount() {
        this.props.getData()      
    }

    state = {
        changedAvatar: undefined
    }

    setAvatar = (event) => {
        if (this.state.changedAvatar) {
            this.state.changedAvatar.classList.remove('usp_icons__seted')
        }
        const avatar = event.currentTarget
        event.currentTarget.classList.add('usp_icons__seted')
        this.setState({
            changedAvatar: avatar,
            setedAvatarName: avatar.getAttribute('value')
        })
    }

    saveSetting = () => {
        if (this.state.setedAvatarName) {
            this.props.setSetting(this.state.setedAvatarName)
        }
        this.props.setPanelMode("primary")
        console.log(this.props.userAvatar);

    }


    avatars = () => avatarsNames.map(fileName =>
        <div
            key={fileName}
            value={fileName}
            onClick={this.setAvatar}
            className="usp_icons"
            style={{
                backgroundImage:
                    `url(${window.location.origin}/img/avatars/${fileName}.jpg)`
            }}>
        </div>)

    setting() {
        return (
            <Panel className="usp">
                <div className="usp_avatars">
                    {this.avatars()}
                </div>
                <ul className="usp_setting">
                    <li onClick={this.props.exitAccount}>забыть аккаунт</li>
                    <li onClick={this.saveSetting}>сохранить</li>
                    <li onClick={() => this.props.setPanelMode("primary")}>назад</li>
                </ul>

            </Panel>)
    }
    primary() {
        return (
            <Panel className="usp">
                <div className="imge" 
                style={{
                    backgroundImage:
                        `url(${window.location.origin}/img/avatars/${this.props.userAvatar}.jpg)`
                }}>
                </div>
                <div className="usp_panel">
                    <p>Вы автаризованы</p>
                    <h1>{this.props.userName}</h1>
                    <h2 onClick={() => this.props.setPanelMode("setting")}>настройки</h2>
                </div>
            </Panel >)
    }

    mode(isMode) {
        switch (isMode) {
            case "primary":
                return this.primary()
            case "setting":
                return this.setting()
            default:
                return (<h1>Loading...</h1>)
        }
    }

    render() {
        return (
            <div>
                {this.mode(this.props.panelMode)}
            </div>
        )
    }
}



export default connect(
    state => ({
        userName: state.user.userName,
        panelMode: state.user.panelMode,
        userAvatar: state.user.avatarName
    }),
    dispatch => ({
        getData: () => dispatch(getUserData()),
        exitAccount: () => dispatch(exitedAccount()),
        setSetting: (avatar) => dispatch(changeSetting({ avatar })),
        setPanelMode: (modeName) => dispatch({ type: "SET_PANEL_MODE", panelMode: modeName })
    })
)(UserPanel);