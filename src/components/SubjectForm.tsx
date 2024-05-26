import { PermIdentitySharp } from "@mui/icons-material"
import { Button, Card, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material"

const SubjectForm = () => {
  return (
    <Card sx={{ padding: 5 }}>
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
        />
      </FormControl>
      <Button variant="contained" sx={{ mr: 1 }}>Save</Button>
      <Button variant="contained" color="secondary">Cancel</Button>
    </Card>
  )
}

export default SubjectForm
