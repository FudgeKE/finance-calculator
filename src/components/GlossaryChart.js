import React from 'react';
import { Box, Typography } from '@mui/material';

const GlossaryChart = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Glossary Chart
      </Typography>
      <Typography variant="body1" gutterBottom>
        The rule of 72 is a simplified way to estimate the doubling of an investment's value, based on a fixed annual rate of interest.
        By dividing 72 by the annual rate of return, you can get a rough estimate of how many years it will take for the initial investment to duplicate itself.
      </Typography>
    </Box>
  );
};

export default GlossaryChart;
