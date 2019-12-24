import React from 'react';


const Message =({data})=> {
    return (
      <div className="message_chat">
        <p>
          <strong>{data.userName}</strong><br/>{data.body}
        </p>
      </div>
    )
}


export default Message