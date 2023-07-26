export const TechFooter = () => {
  const nextLink = 'https://nextjs.org';
  const tailwindLink = 'https://tailwindcss.com';
  const brittanyLink = 'https://brittanychiang.com';
  const sourceCodeLink = 'https://github.com/sonmac1203/portfolio-v2';

  return (
    <footer className='mt-auto text-center text-xs md:text-sm pt-20'>
      Developed in{' '}
      <a className='text-bright' href={nextLink} target='_blank'>
        Next.js 13
      </a>{' '}
      with{' '}
      <a className='text-bright' href={tailwindLink} target='_blank'>
        Tailwind CSS
      </a>{' '}
      by Son Mac in 2023. Greatly inspired by{' '}
      <a className='text-bright' href={brittanyLink} target='_blank'>
        Brittany Chang
      </a>
      . Source code can be found{' '}
      <a className='text-bright' href={sourceCodeLink} target='_blank'>
        here
      </a>
      . You can also see the previous version here.
    </footer>
  );
};
