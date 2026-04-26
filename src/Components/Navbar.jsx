import Link from "next/link";
import Image from "next/image"; 

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-24">
          
          {/* Left: Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href="/">
        
              <Image 
                src="/style-wave.jpeg" 
                alt="Style Wave BD Logo" 
                width={50} 
                height={50} 
                className="object-contain rounded-md"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex space-x-8 justify-center">
            <Link href="/" className="text-gray-600 hover:text-black font-medium transition">
              Home
            </Link>
            <Link href="/story" className="text-gray-600 hover:text-black font-medium transition">
              Story
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black font-medium transition">
              Contact
            </Link>
          </nav>

    
          <div className="flex-1"></div>

        </div>
      </div>
    </header>
  );
}