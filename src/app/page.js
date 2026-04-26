export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50 rounded-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Complete Custom Apparel Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From early design ideas to finished production. Whether you require a single sample or a full production run, we adapt our process to match your scale, timeline, and goals.
        </p>
      </section>

      {/* What We Do */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">What We Do</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          At Style Wave BD LLC, we provide complete custom apparel solutions, guiding our clients through every stage of development—from early design ideas to finished production. 
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Through trusted global platforms such as Upwork and Fiverr, as well as through direct partnerships, we work with clients across the world. Our no‑minimum‑order approach ensures flexibility, empowering creativity, experimentation, and sustainable growth.
        </p>
      </section>

      {/* How We Work */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: 1, title: "Listen", desc: "We listen carefully to our clients’ vision" },
            { id: 2, title: "Understand", desc: "We understand technical and creative requirements" },
            { id: 3, title: "Communicate", desc: "We communicate clearly and transparently" },
            { id: 4, title: "Execute", desc: "We execute with precision and consistency" },
          ].map((item) => (
            <div key={item.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-white text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-gray-800 bg-gray-100 inline-block py-4 px-8 rounded-full">
            Our goal is simple: to deliver apparel that meets expectations—and consistently exceeds them.
          </p>
        </div>
      </section>
    </div>
  );
}