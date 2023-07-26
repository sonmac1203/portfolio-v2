import Image from 'next/image';
import { Pill } from '@/lib/components';

export const ProjectCard = ({ name, description, photoName, tech, report }) => {
  const techArray = tech.split(',');
  const seeReportButton = (
    <span className='text-ivory flex items-center gap-x-2 text-sm'>
      Project report <i className='fa-solid fa-square-arrow-up-right' />
    </span>
  );

  return (
    <li className='md:grid md:grid-cols-11 md:gap-x-4'>
      <div className='col-span-3'>
        <Image
          src={`/${photoName}`}
          width={250}
          height={250}
          alt={`Photo of ${name}`}
          className='rounded-md'
        />
      </div>
      <div className='col-span-8'>
        <div className='flex gap-x-3 mb-2 mt-4 md:mt-0'>
          <h3 className='text-lg font-medium leading-4 text-ivory'>{name}</h3>
          <div className='flex gap-x-3'>
            <i class='fa-brands fa-github'></i>
          </div>
        </div>
        <p className='text-sm leading-5 mb-1'>{description}</p>
        {report && seeReportButton}
        <div className='flex items-center gap-x-3 gap-y-2 flex-wrap text-sm mt-3'>
          {techArray.map((techText) => (
            <Pill text={techText} />
          ))}
        </div>
      </div>
    </li>
  );
};
