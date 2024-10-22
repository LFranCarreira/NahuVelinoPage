import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaChartLine, FaDollarSign, FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import hypereventImg from '@/public/hyperevent.png';
import admindashboardsImg from '@/public/admindashboard.png';
import pokeversehubImg from '@/public/pokeversehub.png';
import calculatorImg from '@/public/calculator.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },

  {
    name: 'Videos',
    hash: '#videos',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
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
