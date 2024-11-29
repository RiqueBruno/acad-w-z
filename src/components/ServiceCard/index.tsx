import React from 'react';

export type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
};

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <article className="bg-colors-brand-primary p-4 h-40 w-40 rounded-lg grid grid-rows-2 items-center justify-center text-4xl">
      {icon}
      <h3 className="w-full text-center text-base">{title}</h3>
    </article>
  );
}
