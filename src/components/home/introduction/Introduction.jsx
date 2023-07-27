import Link from 'next/link';

export const Introduction = () => {
  return (
    <section id='introduction' className='flex flex-col gap-y-3'>
      <Link href='/'>
        <h1 className='text-6xl md:text-7xl lg:text-6xl font-bold text-ivory'>
          Son Mac
        </h1>
      </Link>
      <h2 className='text-lg text-ivory'>
        Software engineer @{' '}
        <a href='https://kmap.arizona.edu' target='_blank'>
          KMap
        </a>
      </h2>
      <h3>
        Currently on{' '}
        <a
          href='https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students'
          target='_blank'
          className='cursor-help hover:text-ivory'
        >
          OPT
        </a>
      </h3>
      <div>
        <a
          className='text-bright flex items-center gap-x-2 font-light group'
          href='/resume.pdf'
          target='_blank'
        >
          My resume{' '}
          <i className='fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform ease-in-out duration-300' />
        </a>
      </div>
    </section>
  );
};
