function Button({ children, style }) {
  return (
    <button
      className={`text-sm sm:text:base px-7 py-3.5 rounded-2xl bg-accent text-white font-body ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
