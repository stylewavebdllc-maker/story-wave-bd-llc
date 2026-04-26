export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Style Wave BD LLC. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">Headquartered in Queens, New York</p>
        </div>
      </div>
    </footer>
  );
}