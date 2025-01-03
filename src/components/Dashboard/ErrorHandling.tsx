
import { Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ErrorHandling = () => {
  const errors = [
    'DNS record not found for domain.',
    'SPF record is incomplete.',
    'Certificate expired.',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6">Authentication Issues</Typography>
        <List>
          {errors.map((error, index) => (
            <ListItem key={index}>
              <ListItemText primary={error} />
              <Button variant="outlined" color="primary">
                Resolve
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </motion.div>
  );
};

export default ErrorHandling;
