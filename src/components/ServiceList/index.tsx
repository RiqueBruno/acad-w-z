import ServiceCard from '../ServiceCard';
import { Service } from './data';

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <section>
      <h2>Lista de serviços que oferecemos:</h2>
      <ul>
        {services.map((service) => (
          <li key={service.title}>
            <ServiceCard title={service.title} icon={service.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
}
