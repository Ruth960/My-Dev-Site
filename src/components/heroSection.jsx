// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"  }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Welcome to My Dev Portfolio
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover my thoughts on technology and showcase of recent projects.
        </p>
      </div>
    </section>
  );
}
