import { createSlice } from "@reduxjs/toolkit"

const reduxSlice = createSlice({
    name: 'books',
    initialState: {
      bookmark: '',
      bookdetails: []
      // bookdetails: {
      //   current: [],
      //   wantTo: [],
      //   read: []
      // }
    },
    reducers: {
      setBookmark(state, action) {
        state.bookmark = action.payload
      },
      setBookDetails(state, action) {
        state.bookdetails = action.payload
      }
    }
  })
  
  export const { setBookmark, setBookDetails } = reduxSlice.actions
  export default reduxSlice.reducer