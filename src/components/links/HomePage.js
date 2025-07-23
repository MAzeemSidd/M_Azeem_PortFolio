'use client'
import { useState, useEffect } from 'react'

const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    { text: 'Software Engineer', duration: 1500 },
    { text: 'Frontend Developer', duration: 1500 },
    { text: 'React.JS Developer', duration: 1500 },
    { text: 'Next.JS Developer', duration: 4000 },
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, texts[currentText].duration);
    return () => clearTimeout(interval);
  }, [currentText]);

  return (
    <div className="relative h-[25px] xl:h-[40px] text-4xl xl:text-5xl text-wrap">
      {texts.map((item, index) => (
        <div
          key={index}
          className={`block lg:inline-block absolute transition-all duration-[${item.duration}ms] ease-in-out lg:mt-0 ${
            currentText === index
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75'
          }`}
        >
          I am a {item.text}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className='h-[calc(100vh-80px)] grid grid-cols-1 grid-rows-1 sm:grid-rows-2 lg:grid-cols-12'>
      <div className='col-span-1 row-span-1 lg:row-span-2 lg:col-span-7 order-2 lg:order-1 h-full flex flex-col justify-center items-center mx-3 lg:ml-16 xl:ml-20 mt-10 lg:mt-0 z-0'>
        <div className='w-[75%] lg:w-auto'>
          <p className='text-xl xl:text-2xl lg:text-start tracking-wider'>Hi, This is</p>
          <p className='text-5xl xl:text-6xl tracking-normal text-wrap font-serif font-semibold mt-2 mb-2 xl:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 max-w-max'>Muhammad Azeem</p>
          <AnimatedText />
          <p className='text-lg xl:text-xl text-justify leading-snug mt-6 text-neutral-400'>This is a small description about me right. This is a small description about me. This is a small description about me. This is a small description about me. This is a small description about me.</p>
        </div>
        {/* <div className='bg-yellow-200/90 absolute size-[150px] rounded-full blur-3xl opacity-20 -z-10'></div>
        <div className='bg-yellow-100/70 absolute size-[500px] rounded-full blur-3xl opacity-10 -z-20'></div> */}
        {/* <div className='bg-yellow-200 absolute h-[20px] w-[600px] rounded-full -z-10 rotate-45 blur-2xl opacity-40'></div> */}
        {/* <div className='bg-pink-200 absolute h-[20px] w-[500px] rounded-full -z-20 -rotate-12 blur-2xl opacity-60'></div>
        <div className='bg-pink-500 absolute h-[30px] w-[70px] rounded-full -z-20 translate-x-24 -translate-y-32 blur-2xl opacity-60'></div>
        <div className='bg-pink-400 absolute h-[40px] w-[60px] rounded-full -z-20 -rotate-45 -translate-x-28 translate-y-36 blur-2xl opacity-60'></div>
        <div className='bg-yellow-200 absolute h-[50px] w-[120px] rounded-full -z-20 rotate-45 -translate-x-40 -translate-y-40 blur-2xl opacity-60'></div>
        <div className='bg-yellow-200 absolute h-[50px] w-[150px] rounded-full -z-20 rotate-12 translate-x-40 translate-y-48 blur-2xl opacity-60'></div> */}
        {/* <div className='bg-yellow-200 absolute size-[150px] rounded-full -z-20 rotate-12 translate-x-[160px] translate-y-[160px]'></div>
        <div className='bg-yellow-200 absolute size-[130px] rounded-full -z-20 rotate-12 translate-x-[120px] translate-y-[50px]'></div>
        <div className='bg-yellow-200 absolute size-[110px] rounded-full -z-20 rotate-12 translate-x-[30px] translate-y-[0px]'></div>
        <div className='bg-yellow-200 absolute size-[90px] rounded-full -z-20 rotate-12 -translate-x-[50px] translate-y-[10px]'></div>
        <div className='bg-yellow-200 absolute size-[70px] rounded-full -z-20 rotate-12 -translate-x-[110px] translate-y-[30px]'></div>
        <div className='bg-yellow-200 absolute size-[60px] rounded-full -z-20 rotate-12 -translate-x-[160px] translate-y-[40px]'></div>
        <div className='bg-yellow-200 absolute size-[50px] rounded-full -z-20 rotate-12 -translate-x-[205px] translate-y-[40px]'></div>
        <div className='bg-yellow-200 absolute size-[45px] rounded-full -z-20 rotate-12 -translate-x-[240px] translate-y-[30px]'></div>
        <div className='bg-yellow-200 absolute size-[40px] rounded-full -z-20 rotate-12 -translate-x-[270px] translate-y-[15px]'></div>
        <div className='bg-yellow-200 absolute size-[30px] rounded-full -z-20 rotate-12 -translate-x-[295px] translate-y-[0px]'></div>
        <div className='bg-yellow-200 absolute size-[20px] rounded-full -z-20 rotate-12 -translate-x-[310px] -translate-y-[15px]'></div>
        <div className='bg-yellow-200 absolute size-[10px] rounded-full -z-20 rotate-12 -translate-x-[318px] -translate-y-[25px]'></div> */}
      </div>
      <div className='col-span-1 row-span-1 lg:row-span-2 lg:col-span-5 order-1 lg:order-2 relative flex justify-center items-center'>
        <div>
          <div className='bg-gradient-to-r from-emerald-500 to-blue-500 -z-10 size-[170px] lg:size-[220px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40'></div>
          <img src='pictures/my_dp_bg_transparent.png' alt='Display Picture' className='rounded-full z-0 w-[250px] lg:w-[300px]' />
        </div>
      </div>
    </div>
  )
}

export default Home