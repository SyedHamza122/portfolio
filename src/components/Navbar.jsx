function Navbar() {
  return (
    <nav>

      {/* Logo */}
      <div className="logo">
        Syed Hamza
      </div>

      {/* Navigation Links */}
      <ul>

        <li>
          <a href="#home">
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a href="#skills">
            Skills
          </a>
        </li>

        <li>
          <a href="#education">
            Education
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
