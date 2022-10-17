import App from './App';
import About from './About';
import Gists from './Gists';
import ChatsContainer from './ChatsContainer';
import Login from './Login';
import SignUp from './SignUp';
import Error from './Error';
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/chats/:chatId",
        element: <ChatsContainer />,
      },
      {
        path: "/gists",
        element: <Gists />,
      },
    ],
  },
]);
