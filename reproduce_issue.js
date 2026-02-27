const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

async function test() {
  try {
    console.log('1. Registering user...');
    try {
        const regRes = await axios.post(`${BASE_URL}/auth/register`, {
          name: 'Test User',
          email: 'test@example.com',
          password: 'password123'
        });
        console.log('Registration successful:', regRes.data);
    } catch (e) {
        console.log('Registration failed or user already exists');
    }

    console.log('\n2. Logging in...');
    const loginRes = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'test@example.com',
      password: 'password123'
    });
    const token = loginRes.data.token;
    console.log('Login successful, token received');

    console.log('\n3. Creating event...');
    const eventRes = await axios.post(`${BASE_URL}/events`, {
      title: 'Test Event',
      description: 'Test Description',
      date: '2026-12-31',
      location: 'Test Location'
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Event created successful:', eventRes.data);

  } catch (error) {
    console.error('Test failed:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

test();
