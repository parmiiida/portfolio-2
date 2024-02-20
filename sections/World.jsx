'use client';


import { motion } from 'framer-motion';
import { TitleText ,TypingText } from '../components'
import styles from '../styles';
import { staggerContainer, fadeIn , } from '../utils/motion'


const World = () => (
  <section className='max-container padding-container flex
  flex-col gap-20 py-10 pb-32 md:gap-20 xl:flex-row'>
  {/* <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once: 'false' ,amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col `}
  >
    <TypingText title='|People on the World'
    textStyles='text-center'/>
    <TitleText title={<>
      Track friends around you and invite them to play together in the same
            world</>}
            textStyles='text-center'
        />
        <motion.div
        variants={fadeIn('up' ,'tween' ,0.3 ,1)}
        className='relative mt-[68px] flex w-full h-[550px]'>
          <img
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'/>
          <div className='absolute bottom-20 right-20 w-70px h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img
            src='people-01.png'
            alt='people'
            className='w-full h-full '/>
          </div>
          <div className='absolute top-10 left-20 w-70px h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img
            src='people-02.png'
            alt='people'
            className='w-full h-full '/>
          </div>
          <div className='absolute top-1/2 left-[45%] w-70px h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <img
            src='people-03.png'
            alt='people'
            className='w-full h-full '/>
          </div>
        </motion.div>
  </motion.div> */}



  <div className={` mx-auto flex flex-col `}>
   <div className='w-[100px] h-[100px] absolute flex flex-col bg-black object-cover object-center'></div>
   <div className='flex flex-col relative text-white'>hi</div>
  </div>

  </section>
);

export default World;
