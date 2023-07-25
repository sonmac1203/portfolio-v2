export const ExperienceCard = ({
  title,
  employer,
  description,
  time,
  location,
  id,
}) => {
  return (
    <li className='bg-red-500 grid grid-cols-11 gap-x-3' id={id}>
      <div className='col-span-3 flex flex-col'>
        <div className='text-sm'>{time.toUpperCase()}</div>
        <div className='text-sm'>{location}</div>
      </div>
      <div className='col-span-8 flex flex-col'>
        <h3 className='text-xl'>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};
