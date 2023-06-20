import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';

interface Project {
  id: string;
  name: string;
}

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleLogin = (token: string) => {
    setToken(token);
    fetchProjects(token);
  };

  const handleLogout = () => {
    setToken(null);
    setProjects([]);
  };

  const fetchProjects = (token: string) => {
    // Make API call to fetch projects using the token
    // Replace the placeholder URL with your actual API endpoint
    fetch('http://dev.june.local:8008/api/v2/project', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      {!token ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
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
