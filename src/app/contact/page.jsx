export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Get in Touch
      </h1>
      
      {/* Subheading */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
        Interested in our custom apparel solutions? We would love to hear from you. 
        Whether you have a design ready or just an idea, let's build something great together.
      </p>

      {/* Contact Card with Premium Hover & Dark Mode Effects */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 max-w-lg mx-auto shadow-sm dark:shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600">
        
        {/* Location Icon with Gradient Background */}
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center transform transition-transform hover:scale-110 duration-300">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>

        {/* Address Information */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Headquarters</h2>
        <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-1">Style Wave BD LLC</p>
        <p className="text-gray-600 dark:text-gray-400">Queens, New York</p>

        {/* Divider & Email Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            <strong className="text-gray-900 dark:text-white font-semibold">Email:</strong> contact@stylewavebd.com
          </p>
          <span className="text-sm text-gray-400 dark:text-gray-500 mt-2 block">
            (Update with your actual email)
          </span>
        </div>

      </div>
    </div>
  );
}