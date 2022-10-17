import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { MyThemeContext } from './context';

function App() {
  const context = useContext(MyThemeContext)
  return (
    <div className="App">
      <header>
        <ul>
          <li><Link to={`/`}>Main</Link></li>
          <li><Link to={`chats/1`}>Chats</Link></li>
          <li><Link to={`about`}>About</Link></li>
          <li><Link to={`gists`}>Gists</Link></li>
        </ul>
        Theme: {context.theme}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
