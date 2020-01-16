import React from 'react';


const Message =({data,isCollocutor})=> {
    let style = "floatLeft message_chat"
    if(isCollocutor){
      style = "floatRight message_chat"
    }
    return (
      <div className={style}>
        <p className="message_chat__nick">
        <strong>{data.user_name}</strong>
        </p>
        <p className="message_chat__text">
         <br/>{data.message}
        </p>
      </div>
    )
}


export default Message