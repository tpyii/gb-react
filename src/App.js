import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([])
  const [text, setText] = useState('')
  const name = 'Петр'
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
      text: text.trim()
    }
    setMessageList([
      ...messageList,
      message
    ])
  }
  useEffect(() => {
    if (!messageList.length) return
    if (messageList[messageList.length - 1]?.author === 'Bot') return
    const timer = setTimeout(() => {
      addMessage({
        author: 'Bot',
        text: 'Thank you for message!'
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [messageList])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={name} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Write your message</legend>
            <input 
              name="text" 
              value={text} 
              onChange={handleChange}
            />
            <input 
              type="submit"
              disabled={!text.trim().length}
            />
          </fieldset>
        </form>
        <ul>
          {messageList.map(item => (
            <li key={item.id}>
              <p>{item.author}: {item.text}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
