import React from 'react';

export type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
};

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <article>
      {icon}
      <h3>{title}</h3>
    </article>
  );
}
