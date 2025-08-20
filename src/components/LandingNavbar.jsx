import Logo from "./Logo";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function LandingNavbar() {
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
    <ul className="invisible md:visible flex md:justify-between md:gap-7 md:flex-row flex-col right-4 sm:right-0 top-0 gap-2 items-start absolute md:static">
      <li className="nav-btn_hover">
        <ScrollLink to="hero" smooth={true} duration={500} className="nav-btn">
          Home
        </ScrollLink>
      </li>
      <li className="nav-btn_hover">
        <ScrollLink
          to="recipe"
          smooth={true}
          duration={500}
          className="nav-btn"
        >
          Recipe
        </ScrollLink>
      </li>
      <li className="nav-btn_hover">
        <ScrollLink
          to="community"
          smooth={true}
          duration={500}
          className="nav-btn"
        >
          Community
        </ScrollLink>
      </li>
      <li className="nav-btn_hover">
        <ScrollLink to="about" smooth={true} duration={500} className="nav-btn">
          About Us
        </ScrollLink>
      </li>
      <li className="nav-btn_hover">
        <a href="#" className="nav-btn md:hidden">
          Search
        </a>
      </li>
      <li className="nav-btn_hover">
        <Link to="/favoritespage" className="nav-btn md:hidden">
          Favorites
        </Link>
      </li>
    </ul>
  );
}

function NavIcons() {
  return (
    <div className="flex gap-4 items-center px-4">
      <Bars3Icon className="h-5 w-5 md:hidden" />
      <Link to="/home">
        <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer hidden md:block" />
      </Link>
      <Link to="/favoritespage">
        <BookmarkIcon className="h-5 w-5 cursor-pointer hidden md:block" />
      </Link>
    </div>
  );
}

export default LandingNavbar;
