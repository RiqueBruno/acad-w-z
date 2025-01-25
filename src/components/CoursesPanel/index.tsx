'use client';

import { Curso } from '@/app/cursos/data';
import Image from 'next/image';
import { useState } from 'react';

type Button = {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
};

interface CoursesPanelProps {
  buttons: Button[];
  data: Curso[];
}

export default function CoursesPanel({ buttons, data }: CoursesPanelProps) {
  const [course, setCourse] = useState<number>(1);
  return (
    <div className="flex flex-col items-center text-colors-brand-secondary text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {buttons.map((item, index) => (
          <button
            key={index}
            onClick={() => setCourse(item.id)}
            className={`${
              item.id === course
                ? 'bg-colors-brand-tertiary/50 text-colors-brand-secondary'
                : ''
            } max-h-32 max-w-64 flex flex-col space-y-4 items-center justify-center bg-colors-brand-tertiary text-colors-brand-primary p-4 rounded-lg shadow-none hover:shadow-lg`}
          >
            {item.icon}
            <h3 className="ml-2">{item.title}</h3>
          </button>
        ))}
      </div>
      {course && (
        <article className="flex flex-col md:grid md:grid-cols-2 items-center mt-8 w-full border-b-2 p-4 rounded-lg shadow-lg min-h-96 mb-8 space-y-4">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={data[course - 1].image}
              alt={data[course - 1].title}
              height={200}
              width={200}
            />
          </div>
          <div className="w-full h-full min-w-full flex flex-col items-center justify-center space-y-4">
            <h3 className="text-2xl">{data[course - 1].title}</h3>
            <p>{data[course - 1].description}</p>
            <p>Carga horária: {data[course - 1].workload}</p>
            <p>Duração: {data[course - 1].duration}</p>
          </div>
        </article>
      )}
    </div>
  );
}
