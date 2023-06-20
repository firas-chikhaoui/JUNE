import React, { useState } from 'react';

// Define the type for the props received by the LoginForm component
interface LoginFormProps {
  onLogin: (username: string, password: string) => void; // Callback function triggered on form submission
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  // Declare state variables using the useState hook
  const [username, setUsername] = useState(''); // Store the username
  const [password, setPassword] = useState(''); // Store the password

  // Event handler for username input change
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value); // Update the username state variable
  };

  // Event handler for password input change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value); // Update the password state variable
  };

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onLogin(username, password); // Call the onLogin function provided as a prop, passing the username and password as arguments
  };

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
