import React, { Component } from 'react'
import './userPanel.css'
import '../animation.css'
/*Libarys */
import { connect } from 'react-redux'
//Ations
import { getUserData ,exitedAccount} from '../../API/api'


class UserPanel extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return (
            <div>
                {this.props.userName ?
                    <div className="usp">
                        <div className="imge"></div>
                        <div className="usp_panel">
                            <h1>{this.props.userName}</h1>
                            <button onClick={this.props.exitAccount}>выйти</button>
                        </div>
                    </div> : <h1><strong>Loading</strong></h1>
                }
            </div>
        )
    }
}



export default connect(
    state => ({ userName: state.user.userName }),
    dispatch => ({
        getData: () => dispatch(getUserData()),
        exitAccount:()=>dispatch(exitedAccount())
    })
)(UserPanel);