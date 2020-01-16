/**Libarys*/
import React from 'react';
import './componentsSimple.scss';



const UserRowIcon = ({ user, addFriend, privateDialog, online }) => {
    const _privateDialog = (event) => {
        if (event.target.innerHTML !== '+') {
            privateDialog(user.id)
        }
    }
    return (
        <div
            onClick={_privateDialog}
            className="userRowIcons">
            <img src={`${window.location.origin}/img/avatars/${user.profile.avatar}.jpg`} alt="avatar" />
            <div>
                <div
                    className="userRowIcons_pluse"
                    onClick={() => { addFriend(user.id) }}>+</div>
                {
                    online.includes(user.id) ? <p
                        style={{
                            color: "green",
                            fontWeight: 600
                        }}
                    >ONLINE</p> : <p>OFFLINE</p>
                }
                <p>ID {user.id}</p>
                <h3>{user.name}</h3>
            </div>


        </div>
    )
}

export default UserRowIcon
