import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Finance Calculator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Finance Calculator/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Simple Interest link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple Interest/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Compound Interest link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Compound Interest/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Savings Goal link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Savings Goal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Glossary Chart link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Glossary Chart/i);
  expect(linkElement).toBeInTheDocument();
});
