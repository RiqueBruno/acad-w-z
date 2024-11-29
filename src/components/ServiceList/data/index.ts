import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { PiHairDryerFill } from 'react-icons/pi';
import { HiLightBulb } from 'react-icons/hi2';
import { FaHandHoldingHeart } from 'react-icons/fa';

export type Service = {
  title: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: 'Cursos',
    icon: React.createElement(FaBookOpen, {
      className: 'text-colors-brand-tertiary',
    }),
  },
  {
    title: 'Atendimentos para Modelos',
    icon: React.createElement(PiHairDryerFill, {
      className: 'text-colors-brand-tertiary',
    }),
  },
  {
    title: 'Workshops',
    icon: React.createElement(HiLightBulb, {
      className: 'text-colors-brand-tertiary',
    }),
  },
  {
    title: 'Ações Sociais',
    icon: React.createElement(FaHandHoldingHeart, {
      className: 'text-colors-brand-tertiary',
    }),
  },
];

export default services;
