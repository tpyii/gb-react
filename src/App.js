import { useState } from 'react';
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
    const date = new Date()
    const message = {
      id: date.getTime(),
      date: date.toLocaleString(),
      author: 'Guest',
      text: text.trim()
    }
    setMessageList([
      ...messageList,
      message
    ])
    setText('')
  }
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
