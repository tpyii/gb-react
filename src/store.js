import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './features/chats/chatsSlice';
import messagesReducer from './features/chats/messagesSlice';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
  }
});
