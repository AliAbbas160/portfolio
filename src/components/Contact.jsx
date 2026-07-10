import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}

        

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>

        <p className="text-lg text-gray-600 leading-8 max-w-2xl mx-auto mb-12">
          I'm currently looking for Software Engineering opportunities.
          If you have an opportunity, project, or simply want to connect,
          I'd love to hear from you.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mb-12">

          <a
            href="mailto:aliabbas2603@gmail.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-x1 hover:bg-blue-700 transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/aliabbasgazge"
            target="_blank"
            rel="noreferrer"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-x1 hover:bg-blue-600 hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 text-3xl">

          <a
            href="https://github.com/AliAbbas160"
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
    </section>
  );
}

export default Contact;