export const Introduction = () => {
  return (
    <section id='introduction' className='flex flex-col gap-y-3'>
      <h1 className='text-6xl md:text-7xl lg:text-6xl font-bold text-ivory'>
        Son Mac
      </h1>
      <h2 className='text-lg text-ivory'>
        Software engineer @ <span className=''>KMap</span>
      </h2>
      <div>
        <button className='text-bright flex items-center gap-x-2 font-light'>
          My resume <i className='fa-solid fa-square-arrow-up-right' />
        </button>
      </div>
    </section>
  );
};
