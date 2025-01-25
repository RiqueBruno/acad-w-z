import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { data } from './data';

const Footer = () => {
  return (
    <footer className="divide-y divide-gray-200">
      {/* MAPA */}
      <div className="p-10 w-full h-96 bg-colors-brand-tertiary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.790274257071!2d-43.222022300000006!3d-22.9211052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f64dff2bce5%3A0x9d5e8ccf9db25812!2sAcademia%20Waleska%20Zanyor%20Cursos%20de%20Cabeleireiro%2C%20Corte%2C%20Colora%C3%A7%C3%A3o%20e%20outros.!5e0!3m2!1spt-BR!2sbr!4v1733068576599!5m2!1spt-BR!2sbr"
          width="auto"
          height="auto"
          style={{ border: 4, width: '100%', height: '100%', borderRadius: 10 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/*Info & Links */}
      <div className="bg-gray-50 text-gray-800 py-10 text-center lg:text-left lg:px-24">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-around items-center">
          <div className="w-[80%] lg:w-[50%]">
            <h2 className="font-bold">Informações</h2>
            <p>
              A Academia Waleska Zanyor funciona de segunda à quinta, das 9h às
              18h. As turmas são montadas de acordo com a necessidade e demanda
              dos alunos.
            </p>
            <ul>
              <li>
                Endereço: Rua São Francisco Xavier, 32 - Sala 307 – Tijuca Rio
                de Janeiro – RJ, 20550-012
              </li>
              <li id="contato">Tel.: (21) 9 9753-1195 / (21) 9 9756-1195</li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10 lg:mt-0 w-[80%] lg:w-[30%]">
            <div>
              <h3 className="font-bold">Compania</h3>
              <ul className="text-sm">
                {data.map((item) => (
                  <li
                    key={item.title}
                    className="hover:text-colors-brand-tertiary"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10 lg:mt-0 w-[80%] lg:w-[20%]">
            <Link
              href="/login"
              className="bg-colors-brand-tertiary text-white px-4 py-2 rounded-md hover:bg-colors-brand-secondary"
            >
              Administrativo
            </Link>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-colors-brand-tertiary text-colors-brand-primary p-5 text-center md:flex justify-between items-center md:px-32">
        <div className="mb-4 md:mb-0 w-full md:w-1/2 md:text-start">
          <h2 className="font-bold">Feito por Bruno Henrique Cardoso - 2025</h2>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://www.facebook.com/AcademiaWZ"
            className="text-2xl hover:text-colors-brand-secondary"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/academiawaleskazanyor/"
            className="text-2xl hover:text-colors-brand-secondary"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
