import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-blue-600 font-semibold text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Ali Abbas Gazge
            </h1>

            <h2 className="text-2xl text-gray-600 mt-6">
              Software Engineer • Python Developer • AI Enthusiast
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
              Passionate about building AI-powered applications,
              full-stack web solutions, and solving real-world
              problems using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/AliGazge_Resume.pdf"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
              >
                Download Resume
              </a>

            </div>

            <div className="flex gap-6 mt-10 text-2xl">

              <a
                href="https://github.com/aliabbas160"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/aliabbasgazge"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:aliabbas2603@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center shadow-xl">

              <span className="text-8xl font-bold text-blue-700">
                <img src="myimg.jpeg" alt="Profile" />
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;