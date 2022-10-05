import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './features/chats/chatsSlice';
import messagesReducer from './features/messages/messagesSlice';

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
  }
});
