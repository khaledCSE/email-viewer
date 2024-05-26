import { Fragment } from 'react'
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { v4 as uuid } from 'uuid'
import { cyan } from '@mui/material/colors'

const MailList = () => {
  const emailList = useSelector((state: RootState) => state.emailList)
  return emailList.map((email) => (
    <ListItem alignItems="flex-start" key={uuid()}>
      <ListItemAvatar>
        <Avatar alt={email.sender} sx={{ bgcolor: cyan[600] }}>{email.sender.split(' ')[0][0].toUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={email.sender}
        secondary={
          <Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {email.subjectLine1}
            </Typography>
            <br />
            {email.previewText}
          </Fragment>
        }
      />
    </ListItem>
  ))
}

export default MailList
