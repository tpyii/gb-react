import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './features/messages/messagesSlice';

function Chats() {
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box>
          <List>
            {chats.map(item => (
              <ListItem disablePadding key={item.name}>
                <Link to={`/chats/${item.id}`}>
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid 
        item 
        xs={12} 
        md={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'end',
          }}
        >
          <ul>
            {messages
              .filter(item => item.chatId === chatId)
              .map(item => (
                <li key={item.id}>
                  <p>{item.author}: {item.text}</p>
                </li>
            ))}
          </ul>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend>Write your message</legend>
            <TextField 
              variant="outlined"
              size="small"
              value={text} 
              onChange={handleChange}
              autoFocus={true}
            />
            <Button 
              variant="contained"
              type="submit"
              disabled={!text.trim().length}
            >
              Отправить
            </Button>
          </fieldset>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Chats;
