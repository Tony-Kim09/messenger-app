import React from 'react'
import ChatBox from './ChatBox/ChatBox'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'
import { useStyles } from './styles'

const ChatContainer = ({ currentUser, targetName, messages, text, setText, sendMessage, toggleOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.chatContainer}>
      <ChatHeader targetName={targetName} toggleOpen={toggleOpen} />
      <ChatBox currentUser={currentUser} messages={messages} />
      <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
    </div>
  )
}

export default ChatContainer
