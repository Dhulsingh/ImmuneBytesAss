const express = require('express');
const app = express();
const port = 3000;

// Middleware for serving static files
app.use(express.static('public'));

// Endpoint for validating login credentials and generating OTP
app.get('/login', (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  // TODO: Validate login credentials and generate OTP

  // Dummy response for testing
  const name = 'John Doe';
  const company = 'ABC Company';
  const age = 30;
  const dob = '01/01/1992';
  const validated = true;

  res.json({ name, company, age, dob, validated });
});

// Endpoint for creating a new user account
app.get('/create', (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const password = req.query.password;
  const company = req.query.company;
  const age = req.query.age;
  const dob = req.query.dob;

  // TODO: Create a new user account in the database

  res.send(`Account created successfully for ${name} with email ${email}`);
});

// Endpoint for displaying Thank You page with account information
app.get('/thankyou', (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const company = req.query.company;
  const age = req.query.age;
  const dob = req.query.dob;

  res