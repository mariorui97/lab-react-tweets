import React from 'react'

function Message(props) {
    console.log(props)
    const {message} = props
    return (
        <div>
        <p className="message">
          {message}
        </p>
        </div>
    )
}

export default Message
