import React from 'react'
import ChatBox from './ChatBox/ChatBox'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'
import { useStyles } from './styles'

const ChatContainer = ({ currentUser, targetUser, messages, text, setText, sendMessage, toggleOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.chatContainer}>
      <ChatHeader targetUser={targetUser} toggleOpen={toggleOpen} />
      <ChatBox currentUser={currentUser} messages={messages} />
      <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
    </div>
  )
}

export default ChatContainer
