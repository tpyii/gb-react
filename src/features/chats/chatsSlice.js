import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  id: 1,
  name: 'Chat1',
},
{
  id: 2,
  name: 'Chat2',
}];

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
});

export default chatsSlice.reducer;
