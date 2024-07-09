import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    searchQuery: ''
}


export const searchQuery = createSlice({
  name: 'search',
  initialState,
  reducers: {
    doSearch: (state, action) => {
        state.searchQuery = action.payload
    }
  }
});

export const { doSearch } = searchQuery.actions;

export default searchQuery.reducer;