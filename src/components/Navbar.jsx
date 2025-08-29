import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Navbar({ hidden, handleSearch, isOpenFilter, handleOpen }) {
  // eslint-disable-next-line
  const location = useLocation();
  const navigate = useNavigate();

  function handleFocus() {
    if (location.pathname === "/home") return;
    return navigate("/home");
  }
  return (
    <div className="flex flex-col items-center">
      <nav className="container mx-auto flex justify-between items-center relative">
        <div className="flex justify-start md:items-center">
          {!isOpenFilter ? (
            <Bars3Icon
              className={`h-5 w-5 hidden md:block ${hidden} cursor-pointer`}
              onClick={handleOpen}
            />
          ) : (
            <XMarkIcon
              onClick={handleOpen}
              className="h-5 w-5 hidden md:block cursor-pointer"
            />
          )}
          <Logo style={"px-0"} />
        </div>
        <Search
          handleFocus={handleFocus}
          handleSearch={handleSearch}
          style={"absolute invisible md:visible md:static"}
        />
        <Bars3Icon className="h-5 w-5 md:hidden" />
        <NavBtns />
      </nav>
      <Search handleSearch={handleSearch} style={"mt-4 md:hidden"} />
    </div>
  );
}

function NavBtns() {
  return (
    <ul className="flex justify-between flex-col items-start md:flex-row  right-4 sm:right-[5%] top-0 gap-2 absolute md:static md:visible invisible">
      <li className="list-none">
        <Link
          to="/home"
          className={`${
            location.pathname === "/home" && "text-logo"
          } navbar-btn`}
        >
          Home
        </Link>
      </li>
      <li className="list-none">
        <Link
          to="/favoritespage"
          className={`${
            location.pathname === "/favoritespage" && "text-logo"
          } navbar-btn`}
        >
          Favorites
        </Link>
      </li>
      <li className="list-none">
        <Link
          to="/"
          className={`${location.pathname === "/" && "text-logo"} navbar-btn`}
        >
          About
        </Link>
      </li>
    </ul>
  );
}

function Search({ style, handleSearch, handleFocus }) {
  return (
    <div className={`w-fit bg-[#F3F3F3] flex items-center gap-2 ${style}`}>
      <span className="flex sm:gap-1 items-center cursor-pointer">
        <span className="text-[10px] sm:text-xs lg:text-sm font-body px-1 sm:px-2">
          All Categories
        </span>
        <ChevronDownIcon className="w-2 sm:w-3 lg:w-4" />
      </span>
      <span className="text-[#ADADAD] pb-1 text-xs sm:text-base">|</span>
      <input
        className="py-1 sm:p-2 outline-none focus:outline-none text-body text-xs lg:text-sm bg-[#F3F3F3]"
        type="search"
        placeholder="Search for recipes..."
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={handleFocus}
      />
      <span className="lg:p-3 p-1 sm:p-2 bg-[#509E2F] cursor-pointer">
        <MagnifyingGlassIcon className="w-4 text-white" />
      </span>
    </div>
  );
}

export default Navbar;
