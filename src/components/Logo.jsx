function Logo() {
  return (
    <div className="flex gap-2 items-center px-4">
      <img src="images/hero/logo.png" className="w-4 h-4 md:w-full" />
      <span className="sm:text-base font-semibold text-logo text-base  lg:text-xl">
        TasteTrail
      </span>
    </div>
  );
}

export default Logo;
