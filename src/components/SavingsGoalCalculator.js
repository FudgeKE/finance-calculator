import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const SavingsGoalCalculator = () => {
  const [goal, setGoal] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState(null);

  const calculateTime = () => {
    const monthlyRate = rate / 100 / 12;
    const calculatedTime = Math.log(1 + (goal * monthlyRate) / monthlyContribution) / Math.log(1 + monthlyRate);
    setTime(calculatedTime);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Savings Goal Calculator
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Savings Goal"
          variant="outlined"
          fullWidth
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          type="number"
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Monthly Contribution"
          variant="outlined"
          fullWidth
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(e.target.value)}
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
      <Button variant="contained" color="primary" onClick={calculateTime}>
        Calculate Time
      </Button>
      {time !== null && (
        <Typography variant="h6" gutterBottom>
          Time to reach goal: {time} months
        </Typography>
      )}
    </Box>
  );
};

export default SavingsGoalCalculator;
