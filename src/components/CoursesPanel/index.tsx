'use client';

import Image from 'next/image';
import { useState } from 'react';

type Course = {
  id: number;
  title: string;
  description: string;
  workload: string;
  duration: string;
};

type Button = {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
};

interface CoursesPanelProps {
  buttons: Button[];
  data: Course[];
}

export default function CoursesPanel({ buttons, data }: CoursesPanelProps) {
  const [course, setCourse] = useState<number>(1);
  return (
    <div>
      {buttons.map((item, index) => (
        <button
          key={index}
          onClick={() => setCourse(item.id)}
          className="flex items-center justify-center bg-colors-brand-tertiary text-colors-brand-primary p-4 rounded-lg mt-4"
        >
          {item.icon}
          <h3 className="ml-2">{item.title}</h3>
        </button>
      ))}
      {course && (
        <article>
          <div>
            <Image
              src="/images/cursos/escova.jpg"
              alt={data[course - 1].title}
              height={200}
              width={200}
            />
          </div>
          <div>
            <h3>{data[course - 1].title}</h3>
            <p>{data[course - 1].description}</p>
            <p>Carga horária: {data[course - 1].workload}</p>
            <p>Duração: {data[course - 1].duration}</p>
          </div>
        </article>
      )}
    </div>
  );
}
