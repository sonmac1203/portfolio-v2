export const LeftColumn = ({ children }) => {
  return (
    <div className='flex flex-col lg:h-screen lg:sticky lg:top-0 lg:flex-col lg:pt-20 lg:pb-10 lg:col-span-1'>
      {children}
    </div>
  );
};
