/**Libarys*/
import React from 'react';
import './componentsSimple.scss';



const UserRowIcon = ({ name, idUser,message }) => {
    return (
        <div className="userRowIcons">
            <img src="" alt="" />
            <div>
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
