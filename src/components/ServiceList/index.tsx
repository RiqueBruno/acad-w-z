import ServiceCard from '../ServiceCard';
import { Service } from './data';

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <section className="w-full px-2 py-16 bg-colors-brand-tertiary space-y-24 flex flex-col items-center justify-center">
      <h2 className="text-3xl lg:text-4xl font-bold w-full text-center text-colors-brand-primary">
        Lista de serviços que oferecemos:
      </h2>
      <ul className="grid lg:grid-cols-4 grid-cols-2 gap-8 items-center justify-center">
        {services.map((service) => (
          <li
            key={service.title}
            className="w-40 h-40 flex items-center justify-center shadow-md rounded-lg hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-105"
          >
            <ServiceCard title={service.title} icon={service.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
}
