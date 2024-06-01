import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GlossaryChart = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Glossary Chart: Rule of 72
      </Typography>
      <Typography variant="body1" gutterBottom>
        The Rule of 72 is a simple way to determine how long an investment will take to double, given a fixed annual rate of interest. Divide 72 by the annual rate of return to get the approximate number of years required for doubling the initial investment.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Annual Interest Rate (%)</TableCell>
              <TableCell>Years to Double</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(21).keys()].map(rate => (
              <TableRow key={rate}>
                <TableCell>{rate + 1}</TableCell>
                <TableCell>{(72 / (rate + 1)).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GlossaryChart;
