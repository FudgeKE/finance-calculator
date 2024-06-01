import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const SavingsGoalCalculator = () => {
  const [goal, setGoal] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [months, setMonths] = useState(null);

  const calculateSavingsGoal = () => {
    const neededMonths = (goal - currentSavings) / monthlyContribution;
    setMonths(neededMonths);
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
          label="Current Savings"
          variant="outlined"
          fullWidth
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
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
      <Button variant="contained" color="primary" onClick={calculateSavingsGoal}>
        Calculate Months
      </Button>
      {months !== null && (
        <Typography variant="h6" gutterBottom>
          Months to reach goal: {months}
        </Typography>
      )}
    </Box>
  );
};

export default SavingsGoalCalculator;
