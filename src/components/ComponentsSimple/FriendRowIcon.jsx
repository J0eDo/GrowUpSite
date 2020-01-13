/**Libarys*/
import React from 'react';
import './componentsSimple.scss';



const UserRowIcon = ({ user, removeFriend, privateDialog }) => {
    const _privateDialog = (event) => {
        if (event.target.innerHTML !== 'Delete') {
            privateDialog(user.id)
        }
    }
    return (
        <div
            onClick={_privateDialog}
            className="userRowIcons">
            <img src={`${window.location.origin}/img/avatars/${user.profile.avatar}.jpg`} alt={user.name} />
            <div>
                <div
                    className="userRowIcons_delete"
                    onClick={() => { removeFriend(user.id) }}>Delete</div>
                <p>ID {user.id}</p>
                <h3>{user.name}</h3>
            </div>
        </div>
    )
}

export default UserRowIcon
