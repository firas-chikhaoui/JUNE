import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';

// Define the shape of a Project object
interface Project {
  id: string;
  name: string;
}

const App: React.FC = () => {
  // Declare state variables using the useState hook
  const [token, setToken] = useState<string | null>(null); // Store authentication token
  const [projects, setProjects] = useState<Project[]>([]); // Store an array of projects

  // Handle login action
  const handleLogin = (token: string) => {
    setToken(token); // Update the token state variable
    fetchProjects(token); // Fetch projects using the token
  };

  // Handle logout action
  const handleLogout = () => {
    setToken(null); // Reset the token state variable
    setProjects([]); // Clear the projects state variable
  };

  // Fetch projects from the API using the provided token
  const fetchProjects = (token: string) => {
    // Make API call to fetch projects using the token
    fetch('http://dev.june.local:8008/api/v2/project', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setProjects(data)) // Update the projects state variable with the fetched data
      .catch((error) => console.log(error)); // Log any errors that occur
  };

  return (
    <div className="App">
      {!token ? (
        // Render the LoginForm component if the user is not logged in
        <LoginForm onLogin={handleLogin} />
      ) : (
        // Render the project list and logout button if the user is logged in
        <>
          <h2 className="main-heading">Project List</h2>
          <ProjectList projects={projects} onLogout={handleLogout} />
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default App;
