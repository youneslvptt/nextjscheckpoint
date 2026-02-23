import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        
        <h1 className="text-4xl font-bold mb-12 text-center">
          My Projects
        </h1>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              E-Commerce Website
            </h3>

            <p className="text-gray-400 mb-4">
              Full stack e-commerce app with authentication,
              cart system and payment integration.
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-400">
                Next.js 
              </span>

              <Link
                target="_blank"
                href="https://portfoliopfl4.netlify.app"
                className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View
              </Link>
            </div>
          </div>

        
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-400 mb-4">
              Modern responsive portfolio built using
              Next.js and CSS.
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-400">
                Next.js and Tailwind
              </span>

              <Link
                href="#"
                className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View
              </Link>
            </div>
          </div>

          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Task Manager App
            </h3>

            <p className="text-gray-400 mb-4">
              A productivity app to manage daily tasks
              with authentication and dashboard.
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-400">
                React and Node.js
              </span>

              <Link
                target="_blank"
                href="https://github.com/youneslvptt/vibecheckpoint5" 
                className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}