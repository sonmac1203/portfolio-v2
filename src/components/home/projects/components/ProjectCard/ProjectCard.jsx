import Image from 'next/image';
import { Pill } from '@/lib/components';

export const ProjectCard = ({
  name,
  description,
  photoName,
  tech,
  report,
  demo,
  href,
}) => {
  const techArray = tech.split(',');

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
          <a className='flex gap-x-3' href={href} target='_blank'>
            <i className='fa-brands fa-github hover:text-bright' />
          </a>
        </div>
        <p className='text-sm leading-5 mb-1'>{description}</p>
        <div className='flex gap-x-3'>
          {report && (
            <a
              className='text-ivory flex items-center gap-x-2 text-sm hover:text-bright'
              href={report}
              target='_blank'
            >
              Project report <i className='fa-solid fa-square-arrow-up-right' />
            </a>
          )}
          {demo && (
            <a
              className='text-ivory flex items-center gap-x-2 text-sm hover:text-bright'
              href={demo}
              target='_blank'
            >
              Video demo <i className='fa-solid fa-square-arrow-up-right' />
            </a>
          )}
        </div>
        <div className='flex items-center gap-x-3 gap-y-2 flex-wrap text-sm mt-3'>
          {techArray.map((techText) => (
            <Pill text={techText} />
          ))}
        </div>
      </div>
    </li>
  );
};
