import About from '@/components/about';
import Contact from '@/components/contact';
import Testimonios from '@/components/testimonios';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import Videos from '@/components/videos';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Videos />
      <Testimonios />
      <Contact />
    </main>
  );
}
