import Projects from './projects'; 

export default function ProjectsPage({ projects, isLoggedIn, isAdmin, deleteProject }) {
  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">All Projects</h2>
        
        <Projects projects={projects} isLoggedIn={isLoggedIn} isAdmin={isAdmin} deleteProject={deleteProject} />
      </div>
    </section>
  );
}