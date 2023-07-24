export const CoreContainer = ({ children }) => {
  return (
    <div className='flex flex-col max-w-4xl mx-auto bg-slate-300 min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 sm:flex-row'>
      {children}
    </div>
  );
};
