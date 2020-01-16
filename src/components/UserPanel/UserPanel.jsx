import React, { Component } from 'react'
import './userPanel.scss'
import '../animation.css'
//MaterialUI
import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core/styles';
/*Libarys */
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Ations
import { getUserData, exitedAccount, changeSetting } from '../../API/userProfile'
//Utils
import avatarsNames from '../../util/avatarsNames'
import { Button } from '@material-ui/core';



const Panel = styled(Card)({
    backgroundColor: "#395969",
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
                <div className="usp_setting">
                    <Button
                        className="usp_setting__btn"
                        onClick={this.props.exitAccount}
                        variant="contained" color="primary">
                        забыть аккаунт</Button>
                    <Button
                        className="usp_setting__btn"
                        onClick={this.saveSetting}
                        variant="contained" color="primary"
                    >сохранить</Button>
                    <Button
                        className="usp_setting__btn"
                        onClick={() => this.props.setPanelMode("primary")}
                        variant="contained" color="primary"
                    >назад</Button>
                </div>

            </Panel>)
    }
    primary() {
        return (
            <Panel className="usp">
                <div className="usp_user">
                    <div className="usp_avatar"
                        style={{
                            backgroundImage:
                                `url(${window.location.origin}/img/avatars/${this.props.userAvatar}.jpg)`
                        }}>
                    </div>
                    <h1>  {this.props.userName}</h1>
                </div>
                <div className="usp_panel">
                    <Button
                        variant="contained" color="primary"> 
                        <Link className="usp_panel__startChat" to="/chat" >
                            чат
                        </Link></Button>
                    <Button
                        className="usp_panel__setting"
                        onClick={() => this.props.setPanelMode("setting")}
                        variant="contained" color="primary"
                    >&#9881; настройки</Button>
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
            <div className="usp_conteiner">
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