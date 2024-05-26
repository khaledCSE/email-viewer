import { Avatar, Card, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { RootState } from '../store'
import MailList from './MailList'
import { emptyList } from '../store/features/emailListSlice'

const MailView = () => {
  const emailData = useSelector((state: RootState) => state.email)
  const emailList = useSelector((state: RootState) => state.emailList)
  const dispatch = useDispatch()

  return (
    <Card sx={{ padding: 5, maxHeight: '600px', overflowY: 'auto' }}>
      <Typography variant='h6'>Email Preview</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {(emailData.sender && emailData.sender.length > 0) ? (<>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<span style={{ fontWeight: 'bold' }}>{emailData.sender}</span>}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    {emailData.subjectLine1}
                  </Typography>
                  <br />
                  {emailData.previewText}
                </Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" sx={{ bgcolor: deepPurple[500] }}>B</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<span style={{ fontWeight: 'bold' }}>{emailData.sender}</span>}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    {emailData.subjectLine2}
                  </Typography>
                  <br />
                  {emailData.previewText}
                </Fragment>
              }
            />
          </ListItem>
        </>) : <Typography variant='subtitle1' color="GrayText">Fill up sender info first</Typography>}

        <Divider variant="inset" component="li" />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='body1'>Saved Emails</Typography>
          <IconButton aria-label="delete" onClick={() => dispatch(emptyList())}>
            <DeleteIcon />
          </IconButton>
        </div>
        {emailList.length > 0 ? (
          <MailList />
        ) : <Typography variant='subtitle1' color="GrayText">No emails</Typography>}
      </List>
    </Card>
  )
}

export default MailView
