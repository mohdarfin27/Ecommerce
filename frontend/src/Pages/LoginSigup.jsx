import React, { useState } from 'react';
import axios from 'axios';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      setAlertMessage('User created successfully');
      setFormData({ username: '', password: '' }); // Reset form fields after successful submission
    } catch (error) {
      setAlertMessage('Error submitting form: ' + (error.response?.data?.error || error.message));
    }

    // Clear the alert message after 5 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };

  return (
    <div>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginSignup;
