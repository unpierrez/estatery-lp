'use client';

import Image from 'next/image';
import { useHeader } from './useHeader';

const { navItems, scrollToTop } = useHeader();

export default function Header() {
  return (
     <header className="fixed top-0 left-0 right-0 flex bg-white/40 h-24 justify-between px-12 font-medium z-50 max-w-[1440px] mx-auto backdrop-blur-md">
      <div className="flex gap-12 items-center">
        <Image 
          className='cursor-pointer' 
          src="/logo.svg" 
          alt="Logo" 
          width={120} 
          height={40} 
          onClick={scrollToTop} />
        <ul className="flex gap-12 items-center">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`
                relative cursor-pointer flex items-center gap-3 
                ${item.hasArrow ? 'arrow-down' : ''}
              `}
            >
              <span className='transition-all duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300
                hover:before:w-full'>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <button className="font-bold border-2 border-[#E0DEF7] h-12 w-[92px] rounded-lg cursor-pointer  hover:border-primary transition-colors">
          Login
        </button>
        <button className="font-bold hover:bg-[#5b4ee0] h-12 w-[106px] rounded-lg bg-primary text-white cursor-pointer">
          Sign up
        </button>
      </div>
    </header>
  );
}

