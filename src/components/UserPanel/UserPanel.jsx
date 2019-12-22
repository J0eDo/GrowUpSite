import React, { Component } from 'react'
import './userPanel.scss'
import '../animation.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*Libarys */
import { connect } from 'react-redux'
//Ations
import { getUserData, exitedAccount } from '../../API/userProfile'

//***IT TEST!!! */
import axios from 'axios'


class UserPanel extends Component {

    componentDidMount() {
        this.props.getData()
    }

    test() {
        axios.get('http://185.87.194.11:3333/test')
            .then((res) => {
                console.log(res);
            })

    }

    render() {
        return (
            <div>
                {this.props.userName ?
                    <Card className="usp">
                        <div className="imge"></div>
                        <div className="usp_panel">
                            <h1>{this.props.userName}</h1>
                            <button onClick={this.props.exitAccount}>выйти</button>
                            <button onClick={this.test}>TEST</button>
                        </div>
                    </Card> : <h1><strong>Loading</strong></h1>
                }
            </div>
        )
    }
}



export default connect(
    state => ({ userName: state.user.userName }),
    dispatch => ({
        getData: () => dispatch(getUserData()),
        exitAccount: () => dispatch(exitedAccount())
    })
)(UserPanel);