export default function Blog({ blogs, isLoggedIn, isAdmin, deleteBlog }) {
  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs
            .filter((blog) => blog.published)
            .map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">By {blog.author}</p>
                  <p className="text-gray-700 mb-4">{blog.content.substring(0, 150)}...</p>
                  {isLoggedIn && isAdmin && (
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete Post
                    </button>
                  )}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}