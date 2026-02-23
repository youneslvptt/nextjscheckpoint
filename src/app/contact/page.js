export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Get In <span className="text-blue-500">Touch</span>
        </h1>

        <p className="text-gray-600 mb-12 text-lg">
          Have a project in mind? Let's talk about it.
        </p>

        
        <form className="space-y-8">

        
          <div>
            <label className="block mb-2 text-black font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

         
          <div>
            <label className="block mb-2 text-gray-800 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

         
          <div>
            <label className="block mb-2 text-gray-800 font-medium">
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}