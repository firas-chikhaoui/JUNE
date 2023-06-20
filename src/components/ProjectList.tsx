import React from 'react';

interface Project {
  id: string;
  name: string;
}

interface ProjectListProps {
  projects: Project[];
  onLogout: () => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onLogout }) => {
  return (
    <div className="container">
      <div className="project-list">
        <h2 className="heading">Project List</h2>
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            {project.name}
          </div>
        ))}
        <button className="logout-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
