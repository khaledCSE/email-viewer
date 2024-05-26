import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './features/emailSlice'
import emailListReducer from './features/emailListSlice'

export const store = configureStore({
  reducer: {
    email: emailReducer,
    emailList: emailListReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch