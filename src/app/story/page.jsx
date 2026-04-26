import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <section>
        {/* Gradient Text Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent pb-2">
          Our Story
        </h2>
        
        {/* Responsive Grid */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Image Section with Creative Background Effect */}
          <div className="w-full md:w-1/3 flex justify-center shrink-0">
            <div className="relative">
              {/* Decorative Gradient Shadow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              
              <Image
                src="/rifat-mohammad-yousuf.jpeg" 
                alt="Founder of Style Wave BD"
                width={400}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full max-w-sm border border-white"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 space-y-7 text-gray-700 leading-relaxed text-lg">
            
            {/* Beautiful Quotation / Blockquote with subtle gradient */}
            <blockquote className="relative p-8 bg-gradient-to-br from-gray-50 to-white border-l-4 border-gray-900 rounded-r-2xl shadow-sm">
              {/* Decorative Quote Mark */}
              <span className="absolute top-2 left-4 text-6xl text-gray-200 font-serif leading-none">
                "
              </span>
              <p className="font-medium text-gray-900 text-xl italic relative z-10">
                The foundation of Style Wave BD LLC is built on experience, consistency, and long‑term commitment to the apparel industry.
              </p>
            </blockquote>

            <p className="text-justify">
              The journey began in 2014, when Mr. Meer Musaddek Ali started his professional career as a custom apparel designer and developer on oDesk (now Upwork). Through years of hands‑on collaboration with global clients, he developed strong expertise in apparel design, technical development, and product execution. Alongside Upwork, he continued serving clients on platforms such as Fiverr and Freelancer, building trust through reliability, craftsmanship, and clear communication.
            </p>

            <p className="text-justify">
              As client demand evolved beyond design and development, he expanded his services into custom apparel manufacturing, operating under the name Style Wave Bangladesh. This marked a significant step toward providing end‑to‑end solutions—supporting clients from initial concept through sampling and production.
            </p>

            {/* Highlighted text block with gradient background */}
            <div className="p-6 bg-gradient-to-r from-gray-100 to-transparent rounded-xl border border-gray-100">
              <p>
                With steady growth, a dedicated and experienced team was formed, bringing together specialists in design, technical development, sampling, and manufacturing coordination. This evolution led to the formal establishment of <strong className="text-gray-900 font-bold">STYLE WAVE BD LLC</strong>, strengthening the company’s global presence and operational structure.
              </p>
            </div>

            <p className="text-justify">
              Today, STYLE WAVE BD LLC, headquartered in Queens, New York, serves designers, startups, and established brands worldwide—offering flexible, no‑MOQ custom apparel solutions grounded in quality, precision, and long‑term partnership.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}