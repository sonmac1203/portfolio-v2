import Image from 'next/image';

export const ProjectCard = ({ name, description, photoName, tech }) => {
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
          <h3 className='text-xl'>{name}</h3>
          <div className='flex'>
            <span>Team</span>
          </div>
        </div>
        <p>{description}</p>
        <div>Tech</div>
      </div>
    </li>
  );
};
