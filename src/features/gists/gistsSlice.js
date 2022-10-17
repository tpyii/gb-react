import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";

export const getGists = createAsyncThunk(
  'gists/getGists',
  async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL_PUBLIC);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      setError(true);
      console.warn(error);
    } finally {
      setLoading(false);
    }
  }
)

const gistsSlice = createSlice({
  name: 'gists',
  initialState: {
    gists: [],
    error: false,
    loading: false,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getGists.fulfilled, (state, action) => {
      state.gists = action.payload
    })
  },
});

export const { setError, setLoading } = gistsSlice.actions;

export default gistsSlice.reducer;
