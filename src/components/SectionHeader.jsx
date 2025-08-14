function SectionHeader({ children, style }) {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-semibold font-heading ${style}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeader;
