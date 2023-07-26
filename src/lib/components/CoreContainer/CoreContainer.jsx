export const CoreContainer = ({ children }) => {
  return (
    <div className='max-w-4xl mx-auto min-h-screen max-w-screen-xl px-10 pt-12 md:px-12 md:pt-20 lg:px-24 lg:py-0 md:grid lg:grid-cols-3 lg:gap-x-8'>
      {children}
    </div>
  );
};
