import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import BlogPage from './components/blogPage';
import ProjectsPage from './components/projectsPage';
import Navbar from './components/navbar';
import Footer from './components/footer'; // Import Footer

function App() {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const dummyBlogs = [
      { id: 1, title: 'My First Blog', author: 'John Doe', content: 'This is the content of my first blog post.', published: true },
      { id: 2, title: 'Another Post', author: 'Jane Smith', content: 'Here is some more blog content.', published: true },
      { id: 3, title: 'Draft Post', author: 'John Doe', content: 'This post is not yet published.', published: false },
    ];
    setBlogs(dummyBlogs);

    const dummyProjects = [
      { id: 1, title: 'Project Alpha', description: 'A cool project.', imageUrl: 'https://picsum.photos/seed/project1/400/300', link: '#' },
      { id: 2, title: 'Project Beta', description: 'Another exciting project.', imageUrl: 'https://picsum.photos/seed/project2/400/300', link: '#' },
    ];
    setProjects(dummyProjects);

    setIsLoggedIn(true);
    setIsAdmin(true);
  }, []);

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
    if (isLoggedIn) {
      setIsAdmin(false);
    }
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} toggleAuth={toggleAuth} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              // No need to pass blogs/projects here anymore unless HeroSection uses them
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage
              blogs={blogs}
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
              deleteBlog={deleteBlog}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <ProjectsPage
              projects={projects}
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
              deleteProject={deleteProject}
            />
          }
        />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;