import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { useSelector } from 'react-redux'
import { Fragment } from 'react/jsx-runtime'
import { RootState } from '../store'
import MailList from './MailList'

const MailView = () => {
  const emailData = useSelector((state: RootState) => state.email)
  const emailList = useSelector((state: RootState) => state.emailList)

  return (
    <Card sx={{ padding: 5, height: '600px' }}>
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
        <Typography variant='body1'>Saved Emails</Typography>
        {emailList.length > 0 ? (
          <MailList />
        ) : <Typography variant='subtitle1' color="GrayText">No emails</Typography>}
      </List>
    </Card>
  )
}

export default MailView
