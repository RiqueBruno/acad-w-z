'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from '../NavItem';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navNames = ['Home', 'Sobre', 'Cursos', 'Serviços', 'Contato'];

  return (
    <header className="bg-colors-brand-primary shadow-md z-[99] fixed w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Logo Academia Waleska Zanyor"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden p-2 text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen
              ? 'absolute top-16 right-6 bg-colors-brand-primary w-48 rounded-md shadow-md transition-all duration-300'
              : 'hidden md:block'
          } md:space-x-6 md:flex md:flex-row md:items-center md:justify-end`}
        >
          <ul className="py-2 md:py-0 md:flex md:items-center md:justify-center">
            {navNames.map((name) => (
              <NavItem
                key={name}
                text={name}
                url={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                cssLink="block px-4 py-2 text-colors-brand-secondary hover:bg-colors-brand-tertiary hover:text-colors-brand-primary transition rounded-md"
                cssLi=""
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
