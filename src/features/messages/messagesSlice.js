import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (message, thunkAPI) => {
    const date = new Date();

    return {
      id: date.getTime(),
      chatId: message.chatId,
      date: date.toLocaleString(),
      author: message.author,
      text: message.text.trim(),
    }
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.push(action.payload)
    })
  },
});

export default messagesSlice.reducer;
