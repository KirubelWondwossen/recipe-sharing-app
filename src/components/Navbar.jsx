import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="container px-4 mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <Bars3Icon className="h-5 w-5" />
        <Logo />
      </div>
      <Search />
      <NavBtns />
    </nav>
  );
}

function NavBtns() {
  return (
    <ul className="flex justify-between">
      <li className="list-none">
        <a href="#" className="nav-btn text-logo">
          Home
        </a>
      </li>
      <li className="list-none">
        <a href="#" className="nav-btn">
          Favorites
        </a>
      </li>
      <li className="list-none">
        <a href="#" className="nav-btn">
          About
        </a>
      </li>
    </ul>
  );
}

function Search() {
  return (
    <div className="w-fit bg-[#F3F3F3] flex items-center gap-2">
      <span className="flex gap-1 items-center cursor-pointer">
        <span className="text-sm font-body px-2">All Categories</span>
        <ChevronDownIcon className="w-4" />
      </span>
      <span className="text-[#ADADAD] pb-1">|</span>
      <input
        className="p-2 outline-none focus:outline-none text-body text-sm bg-[#F3F3F3]"
        type="search"
        placeholder="Search for recipes..."
      />
      <span className="p-3 bg-[#509E2F] cursor-pointer">
        <MagnifyingGlassIcon className="w-4 text-white" />
      </span>
    </div>
  );
}

export default Navbar;
