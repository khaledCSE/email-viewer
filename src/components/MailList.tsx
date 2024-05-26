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
        primary={<span style={{ fontWeight: 'bold' }}>{email.sender}</span>}
        secondary={
          <Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
              fontWeight="bold"
            >
              {email.subjectLine1.length > 0 ? email.subjectLine1 : email.subjectLine2}
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
