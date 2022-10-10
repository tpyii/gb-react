import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './features/messages/messagesSlice';
import Chats from './Chats';

function ChatsContainer() {
  const [text, setText] = useState('')
  let { chatId } = useParams();
  const chats = useSelector((state) => state.chats);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleChange = event => setText(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    if (!text.trim().length) return

    dispatch(addMessage({
      chatId,
      author: 'Guest',
      text,
    }))
    
    setText('')
  }

  useEffect(() => {
    if (!messages.length) return
    if (messages[messages.length - 1]?.author === 'Bot') return

    const timer = setTimeout(() => {
      dispatch(addMessage({
        chatId,
        author: 'Bot',
        text: 'Thank you for message!'
      }))
    }, 1500)

    return () => clearTimeout(timer)
  }, [messages])

  return (
    <Chats 
      chats={chats}
      messages={messages}
      chatId={chatId}
      text={text}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    /> 
  )
}

export default ChatsContainer;
