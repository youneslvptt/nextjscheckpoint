import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="md:w-1/2 bg-gray-900 text-white flex flex-col justify-center px-12 py-20">
        <h1 className="text-4xl font-bold mb-4">
          Younes Boudjerada
        </h1>

        <h2 className="text-2xl mb-6 text-gray-300">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 mb-8">
          I build scalable and modern web applications using
          React, Next.js and Node.js.
        </p>

        <div className="space-y-3 mb-8">
          <p> Clean Code</p>
          <p> Scalable Architecture</p>
          <p> Performance Optimized</p>
          <p> Modern UI/UX</p>
        </div>

        <div className="space-x-4">
          <Link
            href="/projects"
            className=" px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />

          <h3 className="text-xl font-semibold mb-2">
            Hello!
          </h3>

          <p className="text-gray-600">
            Passionate developer focused on building high-quality
            web experiences and scalable applications.
          </p>
        </div>
      </div>

    </div>
  )
}
