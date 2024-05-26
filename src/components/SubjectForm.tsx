import { PermIdentitySharp } from "@mui/icons-material"
import { Button, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setPreviewText, setSender, setSubjectLine1, setSubjectLine2 } from "../store/features/emailSlice"
import { FormEvent } from "react"
import { RootState } from "../store"
import { addToList } from "../store/features/emailListSlice"

const SubjectForm = () => {
  const emailData = useSelector((state: RootState) => state.email)
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailData.sender.length > 0 && emailData.previewText.length > 0 && (emailData.subjectLine1.length > 0 || emailData.subjectLine2.length > 0)) {
      dispatch(addToList(emailData))
    }

    dispatch(setSender(''))
    dispatch(setSubjectLine1(''))
    dispatch(setSubjectLine2(''))
    dispatch(setPreviewText(''))
  }

  return (
    <Card sx={{ padding: 5 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Subject</Typography>
        <Typography variant="body1">Add a subject line for this campaign.</Typography>
        <Typography sx={{ marginTop: 2 }}>Sender:</Typography>
        <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Sender Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // startAdornment={<InputAdornment position="start">A</InputAdornment>}
            endAdornment={<InputAdornment position="start">
              <PermIdentitySharp />
            </InputAdornment>}
            label="Sender Name"
            value={emailData.sender}
            onChange={(e) => dispatch(setSender(e.target.value))}
            required
          />
        </FormControl>
        <Typography sx={{ marginTop: 2 }}>Subject Line:</Typography>
        <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Line 1</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">A</InputAdornment>}
            endAdornment={<InputAdornment position="start">
              <PermIdentitySharp />
            </InputAdornment>}
            label="Line 1"
            value={emailData.subjectLine1}
            onChange={(e) => dispatch(setSubjectLine1(e.target.value))}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Line 2</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">B</InputAdornment>}
            endAdornment={<InputAdornment position="start">
              <PermIdentitySharp />
            </InputAdornment>}
            label="Line 2"
            value={emailData.subjectLine2}
            onChange={(e) => dispatch(setSubjectLine2(e.target.value))}
          />
        </FormControl>
        <Typography>Preview Text:</Typography>
        <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Preview Text</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // startAdornment={<InputAdornment position="start">B</InputAdornment>}
            endAdornment={<InputAdornment position="start">
              <PermIdentitySharp />
            </InputAdornment>}
            label="Preview Text"
            value={emailData.previewText}
            onChange={(e) => dispatch(setPreviewText(e.target.value))}
            required
          />
        </FormControl>
        <Button variant="contained" type="submit" sx={{ mr: 1 }}>Save</Button>
        <Button variant="contained" type="reset" color="secondary">Cancel</Button>
      </form>
    </Card>
  )
}

export default SubjectForm
