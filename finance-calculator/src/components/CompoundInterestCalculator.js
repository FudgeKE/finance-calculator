import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const calculatedInterest =
      principal * Math.pow(1 + rate / (frequency * 100), frequency * time) - principal;
    setInterest(calculatedInterest);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Compound Interest Calculator
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Principal Amount"
          variant="outlined"
          fullWidth
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          type="number"
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Annual Interest Rate (%)"
          variant="outlined"
          fullWidth
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          type="number"
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Time Period (years)"
          variant="outlined"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="number"
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Compounding Frequency (times per year)"
          variant="outlined"
          fullWidth
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          type="number"
        />
      </Box>
      <Button variant="contained" color="primary" onClick={calculateInterest}>
        Calculate Interest
      </Button>
      {interest !== null && (
        <Typography variant="h6" gutterBottom>
          Compound Interest: {interest}
        </Typography>
      )}
    </Box>
  );
};

export default CompoundInterestCalculator;
