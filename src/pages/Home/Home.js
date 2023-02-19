import { Box, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export default function Home() {
  return (
    <Box align="center">
      <Typography
        variant="overline"
        component="h1"
        mt={4}
        sx={{ fontSize: 30 }}
      >
        Welcome to phonebook!
      </Typography>

      <ImportContactsIcon color="secondary" sx={{ fontSize: 70 }} />
    </Box>
  );
}
