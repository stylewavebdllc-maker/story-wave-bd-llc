export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Interested in our custom apparel solutions? We would love to hear from you. 
        Whether you have a design ready or just an idea, let's build something great together.
      </p>

      <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 max-w-lg mx-auto shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Headquarters</h2>
        <p className="text-gray-700 text-lg">Style Wave BD LLC</p>
        <p className="text-gray-600">Queens, New York</p>
        <p className="text-gray-600 mt-6">
          <strong>Email:</strong> contact@stylewavebd.com <br/>
          <span className="text-sm text-gray-400">(Update with your actual email)</span>
        </p>
      </div>
    </div>
  );
}