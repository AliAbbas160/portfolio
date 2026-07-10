const projects = [
  {
    title: "AI Spiritual Assistant",
    description:
      "An AI-powered web application built using Python, Streamlit, and Google's Gemini API. It provides contextual guidance based on sacred texts using Generative AI.",

    technologies: [
      "Python",
      "Streamlit",
      "Gemini API",
      "VADER",
      "BERT",
    ],

    github: "https://github.com/AliAbbas160/AI-Spiritual-Assistant",

    demo: "https://ai-spiritual-assistant-ali.streamlit.app/",
  },

  {
    title: "Disaster Management App",

    description:
      "An Android application that provides SOS alerts, emergency contacts, first aid information, and offline disaster preparedness resources.",

    technologies: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
    ],

    github: "YOUR_GITHUB_LINK",

    demo: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>

        </div>

        {/* Project Cards */}

        <div className="space-y-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition duration-300"
            >

              <h3 className="text-3xl font-bold text-gray-900 mb-5">
                {project.title}
              </h3>

              <p className="text-lg text-gray-600 leading-8 mb-8">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-gray-100 border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;