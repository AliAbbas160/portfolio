function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get to know me
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who I Am
            </h3>

            <p className="text-lg text-gray-600 leading-9 mb-6">
              I am an Information Technology graduate with a passion
              for Software Engineering, Artificial Intelligence and
              Full Stack Development.
            </p>

            <p className="text-lg text-gray-600 leading-9 mb-6">
              I enjoy building practical applications that solve
              real-world problems while continuously learning new
              technologies and improving my development skills.
            </p>

            <p className="text-lg text-gray-600 leading-9">
              My goal is to contribute to meaningful software projects,
              collaborate with talented teams and grow as a Software
              Engineer.
            </p>

          </div>

          {/* Right */}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Quick Information
            </h3>

            <div className="space-y-7">

              <div>
                <p className="font-semibold text-gray-900">
                  🎓 Education
                </p>

                <p className="text-gray-600 mt-2">
                  Bachelor of Engineering (Information Technology)
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  💼 Looking For
                </p>

                <p className="text-gray-600 mt-2">
                  Software Engineering Opportunities
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  📍 Location
                </p>

                <p className="text-gray-600 mt-2">
                  United Arab Emirates
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  💻 Interests
                </p>

                <p className="text-gray-600 mt-2">
                  Python • React • AI • Backend Development
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;