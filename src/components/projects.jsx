// components/Projects.jsx
export default function Projects({ projects, isLoggedIn, isAdmin, deleteProject }) {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 hover:underline"
                >
                  View Project
                </a>
                {isLoggedIn && isAdmin && (
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}