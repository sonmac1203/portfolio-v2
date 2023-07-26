export const SectionTitle = ({ children, className }) => {
  return (
    <div
      className={`flex items-center gap-x-2 uppercase lg:hidden text-ivory ${
        className || ''
      }`}
    >
      <span className='h-px w-8 bg-ash' />
      <h2>{children}</h2>
    </div>
  );
};
