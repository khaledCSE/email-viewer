import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IEmailState {
  sender: string
  subjectLine1: string
  subjectLine2: string
  previewText: string
}

const initialState: IEmailState = {
  sender: '',
  subjectLine1: '',
  subjectLine2: '',
  previewText: ''
}

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setSender: (state, action: PayloadAction<string>) => {
      state.sender = action.payload
    },
    setSubjectLine1: (state, action: PayloadAction<string>) => {
      state.subjectLine1 = action.payload
    },
    setSubjectLine2: (state, action: PayloadAction<string>) => {
      state.subjectLine2 = action.payload
    },
    setPreviewText: (state, action: PayloadAction<string>) => {
      state.previewText = action.payload
    },
  }
})

export const { setSender, setSubjectLine1, setSubjectLine2, setPreviewText } = emailSlice.actions

export default emailSlice.reducer