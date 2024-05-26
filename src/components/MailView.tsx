import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { Fragment } from 'react/jsx-runtime'

const MailView = () => {
  return (
    <Card sx={{ padding: 5, height: '600px' }}>
      <Typography variant='h6'>Email Preview</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<span style={{ fontWeight: 'bold' }}>The Green Yoga</span>}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  Free email marketing course
                </Typography>
                <br />
                {"I'll be in your neighborhood doing errands this…"}
              </Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" sx={{ bgcolor: deepPurple[500] }}>B</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<span style={{ fontWeight: 'bold' }}>The Green Yoga</span>}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  Try the new text editor
                </Typography>
                <br />
                {"I'll be in your neighborhood doing errands this…"}
              </Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard">TH</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </Fragment>
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  )
}

export default MailView
