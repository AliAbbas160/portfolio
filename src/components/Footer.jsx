function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold text-gray-900">
          Ali Abbas Gazge
        </h3>

        <p className="text-gray-600 mt-2">
          Software Engineer • Python Developer • AI Enthusiast
        </p>

        <p className="text-gray-400 mt-6">
          Designed & Developed by Ali Abbas Gazge
        </p>

        <p className="text-gray-400 mt-2 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;