import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import SimpleInterestCalculator from './components/SimpleInterestCalculator';
import CompoundInterestCalculator from './components/CompoundInterestCalculator';
import SavingsGoalCalculator from './components/SavingsGoalCalculator';
import GlossaryChart from './components/GlossaryChart';
import ErrorBoundary from './ErrorBoundary'; // Ensure the path is correct

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Finance Calculator
              </Typography>
              <Button color="inherit" component={Link} to="/simple-interest">
                Simple Interest
              </Button>
              <Button color="inherit" component={Link} to="/compound-interest">
                Compound Interest
              </Button>
              <Button color="inherit" component={Link} to="/savings-goal">
                Savings Goal
              </Button>
              <Button color="inherit" component={Link} to="/glossary-chart">
                Glossary Chart
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/simple-interest" component={SimpleInterestCalculator} />
            <Route path="/compound-interest" component={CompoundInterestCalculator} />
            <Route path="/savings-goal" component={SavingsGoalCalculator} />
            <Route path="/glossary-chart" component={GlossaryChart} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
