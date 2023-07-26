import React from 'react';

export const ContactFooter = () => {
  return (
    <ul className='flex text-xl mt-5 lg:w-full lg:flex-row gap-x-6 lg:text-2xl lg:mt-auto text-bright'>
      <i className='fa-brands fa-linkedin' />
      <i className='fa-brands fa-github' />
      <i className='fa-brands fa-instagram' />
      <i className='fa-solid fa-envelope' />
    </ul>
  );
};
