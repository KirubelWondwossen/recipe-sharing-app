import Logo from "./Logo";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="container px-4 mx-auto flex justify-between items-center">
      <Logo />
      <NavBtns />
      <NavIcons />
    </nav>
  );
}

function NavBtns() {
  return (
    <ul className="flex justify-between gap-6">
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
  );
}

function NavIcons() {
  return (
    <div className="flex gap-4 items-center px-4">
      <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />
      <BookmarkIcon className="h-5 w-5 cursor-pointer" />
    </div>
  );
}

export default Navbar;
