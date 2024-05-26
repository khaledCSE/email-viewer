import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEmailState } from "./emailSlice";

const initialState: IEmailState[] = []

export const emailListSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<IEmailState>) => {
      state.push(action.payload)
    }
  }
})

export const { addToList } = emailListSlice.actions
export default emailListSlice.reducer