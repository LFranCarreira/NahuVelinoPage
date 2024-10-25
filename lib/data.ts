import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaChartLine, FaDollarSign } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Videos',
    hash: '#videos',
  },
  {
    name: 'Testimonios',
    hash: '#testimonios',
  },
  {
    name: 'Contacto',
    hash: '#contacto',
  },
] as const;

export const testimoniosData = [
  {
    title: 'Bachelor of Economics and Finance',
    location: 'Buenos Aires, ARG',
    description:
      'I completed my studies, developing a deep interest in financial markets and investments.',
    icon: React.createElement(LuGraduationCap),
    date: 'Dec - 2022',
  },
  {
    title: 'Investment Fundamentals',
    location: 'Remote, Coursera',
    description:
      'Studied the basics of portfolio management, stock valuation, and market analysis.',
    icon: React.createElement(FaChartLine),
    date: 'Mar - 2023',
  },
  {
    title: 'Equity Research Project',
    location: 'Remote, Personal Initiative',
    description:
      'Conducted an independent analysis of tech companies to explore long-term growth opportunities.',
    icon: React.createElement(FaDollarSign),
    date: 'Jun - 2023',
  },
  {
    title: 'Internship - Financial Analyst',
    location: 'Remote, FinTrack Solutions',
    description:
      'Worked with a team of analysts to build financial models and gain experience in market forecasting.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep - 2023',
  },
] as const;
