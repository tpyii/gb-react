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

const initialChat = {
  id1: {
    name: 'Chat1',
    messages: [{ id: 1664703829921, date: '02.10.2022', text: 'Hello!', author: 'Guest' }],
  },
  id2: {
    name: 'Chat2',
    messages: [{ id: 1664703839205, date: '02.10.2022', text: 'Thank you for message!', author: 'Bot' }],
  },
}

function Chats() {
  const [chatList, setChatList] = useState(initialChat)
  const [text, setText] = useState('')
  let { chatId } = useParams();

  const handleChange = event => setText(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()

    if (!text.trim().length) return

    addMessage({
      author: 'Guest',
      text
    })
    
    setText('')
  }

  const addMessage = ({ author, text }) => {
    const date = new Date()
    const message = {
      id: date.getTime(),
      date: date.toLocaleString(),
      author,
      text: text.trim(),
    }

    setChatList({
      ...chatList,
      ...chatList[chatId].messages.push(message),
    })
  }

  useEffect(() => {
    if (!chatList[chatId].messages.length) return
    if (chatList[chatId].messages[chatList[chatId].messages.length - 1]?.author === 'Bot') return

    const timer = setTimeout(() => {
      addMessage({
        author: 'Bot',
        text: 'Thank you for message!'
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [chatList])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box>
          <List>
            {Object.keys(chatList).map(item => (
              <ListItem disablePadding key={chatList[item].name}>
                <Link to={`/chats/${item}`}>
                  <ListItemButton>
                    <ListItemText primary={chatList[item].name} />
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
            {chatList[chatId].messages.map(item => (
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
