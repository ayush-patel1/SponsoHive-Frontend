import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const RecordSetup = () => {
  const handleVerify = () => {
    console.log('Verify records');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6">Set Up Authentication Records</Typography>
        <Box sx={{ marginY: 2 }}>
          <TextField fullWidth label="SPF Record" variant="outlined" sx={{ marginBottom: 2 }} />
          <TextField fullWidth label="DKIM Record" variant="outlined" sx={{ marginBottom: 2 }} />
          <TextField fullWidth label="DMARC Record" variant="outlined" />
        </Box>
        <Button variant="contained" color="secondary" onClick={handleVerify}>
          Verify Records
        </Button>
      </Paper>
    </motion.div>
  );
};

export default RecordSetup;
