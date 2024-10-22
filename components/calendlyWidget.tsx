import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className='calendly-inline-widget w-full min-w-[320px] h-[450px] mx-auto'
      data-url='https://calendly.com/carreirafranco'
    ></div>
  );
};

export default CalendlyWidget;
