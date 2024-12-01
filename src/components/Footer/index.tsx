import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
      <div className="bg-gray-50 text-gray-800 py-10 text-center lg:text-left px-8">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center">
          <div>
            <h2>Informações</h2>
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
              <li>Tel.: (21) 9 9753-1195 / (21) 9 9756-1195</li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10 lg:mt-0">
            <div>
              <h3 className="font-bold">Compania</h3>
              <ul className="text-sm">
                <li>Sobre Nós</li>
                <li>Trabalhe Conosco</li>
                <li>Torne-se um parceiro</li>
                <li>Administrativo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Suporte</h3>
              <ul className="text-sm">
                <li>FAQ</li>
                <li>Perguntas e Respostas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-colors-brand-tertiary text-colors-brand-primary p-5 text-center">
        <div className="flex justify-center space-x-4">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
