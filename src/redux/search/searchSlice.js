import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    searchResult: {
      
    }
}

export const searchQuery = createSlice({
  name: 'search',
  initialState,
  reducers: {
    doSearch: (state, action) => {
        state.searchResult = action.payload
    }
  }
});

export const { doSearch } = searchQuery.actions;

export default searchQuery.reducer;