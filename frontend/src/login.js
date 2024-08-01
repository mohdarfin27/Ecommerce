import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      setGreeting(`Hello, ${name}! Thank you for submitting your information.`);
    } else {
      console.error('Failed to submit data');
    }
  };

  return (
    <div className="App">
      <h1>Submit Your Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default Login;
