
import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import SenderOverview from '../components/Dashboard/SenderOverview';
import RecordSetup from '../components/Dashboard/RecordSetup';
import ErrorHandling from '../components/Dashboard/ErrorHandling';

const ComplianceDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Compliance Dashboard
        </Typography>
        <SenderOverview />
        <RecordSetup />
        <ErrorHandling />
      </Container>
    </motion.div>
  );
};

export default ComplianceDashboard;
