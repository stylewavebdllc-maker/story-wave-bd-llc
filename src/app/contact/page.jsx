export default function ContactPage() {
  return (
    <div className="relative min-h-screen py-24 overflow-hidden flex items-center justify-center">
      
      {/* Background Decorative Glowing Orbs (Premium Effect) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-300 dark:bg-gray-700/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-200 dark:bg-gray-800/40 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700/50 text-sm font-semibold text-gray-800 dark:text-gray-300 mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-700 dark:bg-gray-400"></span>
          </span>
          We are available
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 tracking-tight">
          Get in Touch
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Interested in our custom apparel solutions? We would love to hear from you. 
          Whether you have a design ready or just an idea, let's build something great together.
        </p>

        {/* Separate Cards Container for Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* USA Office Card */}
          <div className="group relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-200/80 dark:border-gray-700/50 shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.2)] text-left transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:hover:shadow-gray-800/30 dark:hover:border-gray-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent dark:from-gray-800/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-8 shadow-sm border border-white dark:border-gray-600 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our USA Office</h2>
              <div className="w-10 h-1 bg-gray-900 dark:bg-white rounded-full mb-6 group-hover:w-20 transition-all duration-500"></div>
              
              <p className="text-gray-900 dark:text-gray-200 text-xl font-semibold mb-3">Style Wave BD LLC</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">103-55 97street Suite#8c<br/>Ozone park, New York 11417, USA</p>
            </div>
          </div>

          {/* Bangladesh Office Card */}
          <div className="group relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-200/80 dark:border-gray-700/50 shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.2)] text-left transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:hover:shadow-gray-800/30 dark:hover:border-gray-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent dark:from-gray-800/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-8 shadow-sm border border-white dark:border-gray-600 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our BD Office</h2>
              <div className="w-10 h-1 bg-gray-900 dark:bg-white rounded-full mb-6 group-hover:w-20 transition-all duration-500"></div>
              
              <p className="text-gray-900 dark:text-gray-200 text-xl font-semibold mb-3">Style Wave BD LLC</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">Holding no 182, Block -K<br/>South Banasree, Dhaka 1219, Bangladesh</p>
            </div>
          </div>

        </div>

        {/* ULTRA PREMIUM Email Banner Button */}
        <a 
          href="mailto:contact@stylewavebd.com" 
          className="group relative inline-flex items-center justify-center gap-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
        >
          {/* Animated Glow inside button on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-100 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Content (Z-10 to stay above background) */}
          <div className="relative z-10 flex items-center gap-4">
            {/* Elegant Circular Icon Box */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 dark:bg-black/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            
            {/* Text */}
            <span className="text-xl md:text-2xl font-bold tracking-wide">contact@stylewavebd.com</span>
          </div>
        </a>

      </div>
    </div>
  );
}