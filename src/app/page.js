export default function Home() {
  const steps = [
    {
      id: 1,
      title: "Listen",
      desc: "We listen carefully to our clients’ vision",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Understand",
      desc: "We understand technical and creative requirements",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Communicate",
      desc: "We communicate clearly and transparently",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Execute",
      desc: "We execute with precision and consistency",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
      
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-28 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.03)] dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-gray-200 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-40"></div>
        <div className="absolute top-24 -right-24 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
            Complete Custom <br className="hidden md:block" /> Apparel Solutions
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From early design ideas to finished production. Whether you require a single sample or a full production run, we adapt our process to match your scale, timeline, and goals.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-300 mb-6 tracking-wide uppercase">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Who We Are</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-4 text-justify md:text-left">
            Style Wave BD LLC is a team of dedicated apparel professionals with a deep understanding of garment design, construction, and manufacturing. Our creative approach is rooted in the history of clothing-making, refined by modern techniques, and driven by respect for individuality—both in design and in people.
          </p>
        </div>

        {/* Right Side: Premium Quotation Box */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <blockquote className="relative p-8 md:p-10 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-3xl shadow-xl transform transition-transform hover:scale-[1.02]">
            <span className="absolute top-2 left-4 md:top-4 md:left-6 text-6xl md:text-7xl text-gray-500 font-serif opacity-40 leading-none">
              "
            </span>
            <p className="relative z-10 text-base md:text-lg font-medium italic leading-relaxed pt-4">
              We believe every brand, regardless of size, deserves the same level of attention and professionalism. That belief shapes how we work, communicate, and deliver. For us, manufacturing is not just a process—it’s a partnership built on trust, clarity, and shared goals.
            </p>
          </blockquote>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-16 border border-gray-100 dark:border-gray-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">What We Do</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
            At Style Wave BD LLC, we provide complete custom apparel solutions, guiding our clients through every stage of development—from early design ideas to finished production.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            Through trusted global platforms such as Upwork and Fiverr, as well as through direct partnerships, we work with clients across the world. Our no‑minimum‑order approach ensures flexibility, empowering creativity, experimentation, and sustainable growth.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-gray-900 dark:text-white">How We Work</h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item) => (
            <div 
              key={item.id} 
              className="group relative p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="mx-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Quotation Badge */}
        <div className="mt-16 md:mt-20 text-center px-4">
          <div className="inline-block p-[2px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 rounded-full shadow-sm">
            <div className="bg-white dark:bg-gray-900 px-6 py-4 md:px-8 md:py-5 rounded-full">
              <p className="text-base md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                Our goal is simple: to deliver apparel that meets expectations—and consistently exceeds them.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}