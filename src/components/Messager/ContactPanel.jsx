import React, { Component } from 'react';
import "./chat.scss";
//Libarys
import { connect } from 'react-redux'
//Actions 
import { getUsers,addFriend } from '../../API/messagerPanel'
//Components//
import UserRowIcon from '../ComponentsSimple/UserRowIcon'
//MaterialUI
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone';

import SearchIcon from '@material-ui/icons/Search';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';


const Search = styled(TextField)({
    width: '23vw',
    margin: '.8rem'
});

class RegistrationForm extends Component {

    componentDidMount() {
        this.props.setPanelMode("friends")
    }

    constructorUsersColumn(users, mode) {
        console.log(users, "MATTER_USER");
        if (users) {
            switch (mode) {
                case "friends":
                    return users.map(user =>
                        <UserRowIcon key={`${user.id}`}
                            name={user.name}
                            avatar={user.profile.avatar}
                            idUser={user.id}
                            message={null} />)
                case "all":
                    return users.map(user =>
                        <UserRowIcon key={`${user.id}`}
                        name={user.name}
                        avatar={user.profile.avatar}
                        idUser={user.id}
                        message={null} 
                        addFriend={addFriend}/>)
                case "events":
                    return users.map(user =>
                        <UserRowIcon key={`${user.id}`}
                            name={user.name}
                            idUser={user.id}
                            message={user.message} />)
            }
        } else {
            return (<h3>Загрузка</h3>)
        }
    }

    render() {
        return (
            <div className="contactPanel">
                <div>
                    <BottomNavigation value={this.props.panelMode} 
                    onChange={(event, newValue) => {
                        this.props.setPanelMode(newValue)
                    }}>
                        <BottomNavigationAction label="Друзья" value="friends" icon={<EmojiPeopleTwoToneIcon />} />
                      {/*   <BottomNavigationAction label="Чаты" value="favorites" icon={<ContactsIcon />} /> */}
                        <BottomNavigationAction label="Поиск" value="all" icon={<SearchIcon />} />
                    </BottomNavigation>
                    <div className="textField"></div>
                    <div className="searchResult">
                        {this.constructorUsersColumn(this.props.contacts, this.props.panelMode)}
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
    state => ({
        panelMode: state.messager.barMode,
        contacts: state.messager.users
    }),
    dispatch => ({
        setPanelMode: (modeName) => dispatch(getUsers(modeName)),
    })
)(RegistrationForm);