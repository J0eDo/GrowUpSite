import React from 'react';


const Message =({data})=> {
    return (
      <div className="message_chat">
        <p>
          <strong>{data.user_name}</strong><br/>{data.message}
        </p>
      </div>
    )
}


export default Message