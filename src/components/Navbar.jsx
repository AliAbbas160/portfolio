function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
        >
          Ali Abbas Gazge
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition duration-200"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-600 transition duration-200"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 transition duration-200"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition duration-200"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;