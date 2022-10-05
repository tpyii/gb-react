import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    messageAdded(state, action) {
      const date = new Date();

      state.push({
        id: date.getTime(),
        chatId: action.payload.chatId,
        date: date.toLocaleString(),
        author: action.payload.author,
        text: action.payload.text.trim(),
      });
    },
  },
});

export const { messageAdded } = messagesSlice.actions;
export default messagesSlice.reducer;
