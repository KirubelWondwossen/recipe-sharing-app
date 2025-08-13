function Navbar() {
  return (
    <nav className="container mx-auto px-4">
      <ul className="flex justify-between">
        <li>
          <a href="#" className="nav-btn">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Recipe
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Community
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
