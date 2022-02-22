import { createSlice } from "@reduxjs/toolkit"

const reduxSlice = createSlice({
    name: 'books',
    initialState: {
      loggedIn: false,
      bookmark: '',
      // bookdetails: []
      bookdetails: {
        current: [],
        wantTo: [],
        read: []
      }
    },
    reducers: {
      setLogin(state, action) {
        state.loggedIn = action.payload
      },
      setBookmark(state, action) {
        state.bookmark = action.payload
      },
      setBookDetails(state, action) {
        state.bookdetails = action.payload
      }
    }
  })
  
  export const { setLogin, setBookmark, setBookDetails } = reduxSlice.actions
  export default reduxSlice.reducer