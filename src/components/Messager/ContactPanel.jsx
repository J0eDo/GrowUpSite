import React, { Component } from 'react';
import "./chat.scss";

/*Libarys */
import { connect } from 'react-redux'
/*Actions */
/*  import { autorizated, registrated } from '../../API/api' */
 
//Components//
import UserRowIcon from '../ComponentsSimple/UserRowIcon'
//MaterialUI// 
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';



const users = [
    {
        id: "2",
        name: "ALEX",
        avatar: "man",
        isFreind: "true",
        message: "Some text of new text"
    },
    {
        id: "3",
        name: "Jon",
        avatar: "man",
        isFreind: "false",
        message: "Short text "
    },
    {
        id: "4",
        name: "Jack",
        avatar: "man",
        isFreind: "false",
        message: ":)"
    },
    {
        id: "5",
        name: "Irina",
        avatar: "man",
        isFreind: "is",
        message: "Very very and very longed Mess"
    },
]

const Search = styled(TextField)({
    width: '23vw',
    margin: '.8rem'
});

class RegistrationForm extends Component {

    state = {
        panelMode: "friends"
    }

    componentDidMount() {

    }


    constructorUsersColumn(users, mode) {
        switch (mode) {
            case "friends":
                return users.map(user =>
                    <UserRowIcon key={`${user.id}`}
                       /*  onClick={} */
                        name={user.name}
                        idUser={user.id}
                        message={null} />)
            case "favorites":
                return users.map(user =>
                    <UserRowIcon key={`${user.id}`}
                        name={user.name}
                        idUser={user.id}
                        message={user.message} />)
            case "events":
                return users.map(user =>
                    <UserRowIcon key={`${user.id}`}
                        name={user.name}
                        idUser={user.id}
                        message={user.message} />)
        }
    }

    render() {
        return (
            <div className="contactPanel">
                <div>
                    <BottomNavigation value={this.state.panelMode} onChange={(event, newValue) => {
                        this.setState({ panelMode: newValue });
                    }}>
                        <BottomNavigationAction label="Друзья" value="friends" icon={<SearchIcon />} />
                        <BottomNavigationAction label="Чаты" value="favorites" icon={<ContactsIcon />} />
                        <BottomNavigationAction label="События" value="events" icon={<EmojiPeopleIcon />} />
                    </BottomNavigation>
                    <div className="textField">
                        <div className="searchResult">
                            {this.constructorUsersColumn(users, this.state.panelMode)}
                        </div>
                    </div>
                </div>
                <Search
                    id="searchInput"
                    helperText="Input name or ID user"
                />
            </div>
        )
    }
}


export default connect(
    state => ({ panelMode: state.messager.panelMode }),
    dispatch => ({})
)(RegistrationForm);