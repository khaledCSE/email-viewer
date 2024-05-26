import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SubjectForm from './components/SubjectForm';
import MailView from './components/MailView';

export default function App() {
  return (
    <Container sx={{ padding: 5 }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <SubjectForm />
        </Grid2>
        <Grid2 xs={6}>
          <MailView />
        </Grid2>
      </Grid2>
    </Container>
  )
}
