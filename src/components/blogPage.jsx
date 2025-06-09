import Blog from './blogs'; 

export default function BlogPage({ blogs, isLoggedIn, isAdmin, deleteBlog }) {
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">All Blog Posts</h2>
        
        <Blog blogs={blogs} isLoggedIn={isLoggedIn} isAdmin={isAdmin} deleteBlog={deleteBlog} />
      </div>
    </section>
  );
}