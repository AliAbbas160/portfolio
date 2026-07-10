const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "C", "C++","Kotlin"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "HTML", "CSS", "Tailwind CSS","Bootstrap"],
  },
  {
    title: "Backend Development",
    skills: ["Flask", "Streamlit"],
  },
  {
    title: "Artificial Intelligence",
    skills: ["Gemini API", "Prompt Engineering", "VADER", "BERT"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools/Frameworks",
    skills: ["Git", "GitHub", "VS Code", "Tableu", "PowerBI", "REST API","Android Studio"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Technical Skills
          </h2>

        </div>

        {/* Skill Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
            >

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="bg-white border border-gray-300 rounded-full px-4 py-2 text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;