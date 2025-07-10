import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    setProjects([
      { id: 1, name: "Project Alpha", description: "Awesome project", image: "https://www.shutterstock.com/image-photo/real-estate-agents-selling-clients-260nw-2392550427.jpg" },
      { id: 2, name: "Project Beta", description: "Better project", image: "https://www.shutterstock.com/image-photo/hand-signing-on-contract-after-260nw-1898963704.jpg" },
      { id: 3, name: "Project Gamma", description: "Better project", image: "https://www.shutterstock.com/image-photo/hand-signing-on-contract-after-260nw-1898963704.jpg" },
    ]);
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl text-blue-800 font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(proj => (
          <div key={proj.id} className="bg-white p-4 shadow rounded">
            <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-gray-600 mb-2">{proj.description}</p>
            <button className="bg-orange-500 text-white font-bold py-2.5 px-5 me-2 mb-2 text-sm  focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
