import Logo from "./Logo";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="container px-4 mx-auto flex justify-between items-center relative">
      <Logo />
      <NavBtns />
      <NavIcons />
    </nav>
  );
}

function NavBtns() {
  return (
    <ul className="flex md:justify-between md:gap-6 md:flex-row flex-col right-4 sm:right-0 top-0 gap-2 items-start absolute md:static">
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
      <Bars3Icon className="h-5 w-5 md:hidden" />
      <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer hidden md:block" />
      <BookmarkIcon className="h-5 w-5 cursor-pointer hidden md:block" />
    </div>
  );
}

export default Navbar;
