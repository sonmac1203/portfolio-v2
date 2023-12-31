import { Pill } from '@/lib/components';
export const ExperienceCard = ({
  title,
  employer,
  description,
  time,
  location,
  id,
  tech,
  href,
}) => {
  const techArray = tech ? tech.split(',') : [];
  return (
    <li className='md:grid md:grid-cols-11 md:gap-x-4' id={id}>
      <div className='hidden md:col-span-3 md:flex md:flex-col md:gap-y-2'>
        <div className='text-xs'>{time.toUpperCase()}</div>
        <div className='text-xs'>{location}</div>
      </div>
      <div className='col-span-8 flex flex-col'>
        <div className='text-xs mb-2 md:hidden'>{time.toUpperCase()}</div>
        <h3 className='text-lg font-medium leading-4 mb-1 text-ivory'>
          {title}
        </h3>
        {href ? (
          <a
            href={href}
            className='flex text-base mb-2 items-center gap-x-2 hover:text-bright'
            target='_blank'
          >
            <h4>{employer}</h4>
            <i className='fa-solid fa-square-arrow-up-right' />
          </a>
        ) : (
          <div className='flex text-base mb-2 items-center gap-x-2'>
            <h4>{employer}</h4>
          </div>
        )}
        <p className='text-sm leading-5 font-light mb-3'>{description}</p>
        <div className='flex items-center gap-x-3 gap-y-2 flex-wrap text-sm'>
          {techArray.map((techText, key) => (
            <Pill text={techText} key={key} />
          ))}
        </div>
      </div>
    </li>
  );
};
