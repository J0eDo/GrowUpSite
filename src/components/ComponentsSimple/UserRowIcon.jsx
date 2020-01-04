/**Libarys*/
import React from 'react';
import './componentsSimple.scss';



const UserRowIcon = ({ name, idUser,message ,avatar,addFriend}) => {
    return (
        <div className="userRowIcons">
            <img src={`${window.location.origin}/img/avatars/${avatar}.jpg`} alt="" />
            <div>
                {
                    addFriend?
                    <p
                    className="userRowIcons_pluse"
                    onClick={()=>{addFriend(idUser)}}>+</p>
                    :null
                }
                <p>ID {idUser}</p>
                <h3>{name}</h3>
                {
                    message?<p className="message"> {message}</p>:null
                }
            </div>


        </div>
    )
}

export default UserRowIcon
