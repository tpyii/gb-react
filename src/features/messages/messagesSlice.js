import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ref, set, onValue } from "firebase/database";
import { database } from '../../services/firebase';

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

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const messagesRef = ref(database, 'messages');
    let data;

    await onValue(messagesRef, (snapshot) => {
      data = snapshot.val()
    });

    return data;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMessage.fulfilled, (state, action) => {
        state.push(action.payload);
        set(ref(database, 'messages'), action.payload);
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

export default messagesSlice.reducer;
