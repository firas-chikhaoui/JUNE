import React from 'react';

// Define the shape of a Project object
interface Project {
  id: string;
  name: string;
}

// Define the type for the props received by the ProjectList component
interface ProjectListProps {
  projects: Project[]; // Array of projects to be displayed
  onLogout: () => void; // Callback function triggered on logout button click
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onLogout }) => {
  return (
    <div className="container">
      <div className="project-list">
        <h2 className="heading">Project List</h2>
        {/* Render each project item */}
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            {project.name}
          </div>
        ))}
        {/* Render the logout button */}
        <button className="logout-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
