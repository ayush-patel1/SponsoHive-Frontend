import { Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const SenderOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6">Sender Overview</Typography>
        <Typography variant="body1">Name: John Doe</Typography>
        <Typography variant="body1">Organization: Example Inc.</Typography>
        <Typography variant="body1">Email: john.doe@example.com</Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Edit Sender Information
        </Button>
      </Paper>
    </motion.div>
  );
};

export default SenderOverview;
