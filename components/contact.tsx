'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const CalendlyWidget = dynamic(() => import('./calendlyWidget'), {
  ssr: false,
});
export default function Contact() {
  const { ref } = useSectionInView('Contacto');

  return (
    <motion.section
      id='contacto'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='nahuvelino@gmail.com'>
          nahuvelino@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      <div className='pt-10'>
        <SectionHeading>You can also set a meeting</SectionHeading>
        <div className='pt-2'>
          <CalendlyWidget />
        </div>
      </div>
    </motion.section>
  );
}
