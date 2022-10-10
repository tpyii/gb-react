import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Chats({
  chats,
  messages,
  chatId,
  text,
  handleChange,
  handleSubmit
}) {
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
