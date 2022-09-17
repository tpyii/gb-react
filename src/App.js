import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([])
  const name = 'Петр'
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
