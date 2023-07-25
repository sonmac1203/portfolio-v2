import React from 'react';
import Image from 'next/image';

export const ProjectCard = () => {
  return (
    <li className='grid grid-cols-11 gap-x-3 items-center'>
      <div className='col-span-3'>
        <Image
          src='/test1.png'
          width={500}
          height={500}
          alt='Picture of the author'
        />
      </div>
      <div className='col-span-8'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>This is a title</h3>
          <div className='flex'>
            <span>Team</span>
          </div>
        </div>
        <p>
          Made and deployed a React web app providing all-in-one social media
          management for restaurant and shop owners. Integrated Facebook APIs to
          enable publishing, updating, deleting, viewing, and scheduling content
          on business accounts. Leveraged Firebase for email-password
          authentication and data storage.
        </p>
        <div>Tech</div>
      </div>
    </li>
  );
};
