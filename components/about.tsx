'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('Home');

  return (
    <motion.section
      ref={ref}
      className='mb-2 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='home'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-2'>
        After completing my high school studies with a bachelor’s degree in{' '}
        <span className='font-medium'>Economics and Finance</span>, I developed
        a passion for understanding markets and investments. Before starting
        university, I pursued self-study courses in{' '}
        <span className='font-medium'>
          stock trading and portfolio management
        </span>
        . <span className='italic'>My favorite aspect of investing</span> is
        analyzing trends and finding growth opportunities. I{' '}
        <span className='underline'>love</span> the excitement of making
        informed decisions and seeing the results over time. My core focus areas
        are{' '}
        <span className='font-medium'>
          equity investments, ETFs, and financial analysis
        </span>
        . I am also familiar with cryptocurrency markets and real estate. I am
        continuously exploring new strategies and tools. Currently, I am looking
        for a <span className='font-medium'>full-time role</span> as a financial
        analyst or investment consultant.
      </p>

      <p>
        <span className='italic'>When I’m not analyzing markets</span>, I enjoy
        staying active through sports, traveling, and exploring new cuisines. I
        also love <span className='font-medium'>expanding my knowledge</span> in
        personal finance and investment strategies. Lately, I’ve been learning
        about{' '}
        <span className='font-medium'>
          sustainable investing and wealth management
        </span>
        . Additionally, I am developing my skills in{' '}
        <span className='font-medium'>
          Excel modeling and Python for data analysis
        </span>
        .
      </p>
    </motion.section>
  );
}
