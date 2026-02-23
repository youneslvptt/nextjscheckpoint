export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        
        <h1 className="text-4xl font-bold mb-10 text-center">
          About Me
        </h1>

        
        <div className="text-gray-300 text-lg leading-relaxed mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-4">
            I am a passionate Full Stack Developer focused on building
            modern, scalable and high-performance web applications.
          </p>

          <p>
            I specialize in React, Next.js, Node.js and clean UI design.
            My goal is to create fast, responsive and user-friendly digital experiences.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-10">

          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Fast Learner</li>
              <li>Attention to Detail</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}