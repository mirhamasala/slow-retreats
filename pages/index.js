import { useRef } from 'react';

import PackingList from '@components/PackingList';
import NavButton from '@components/NavButton';
import Program from '@components/Program';
import Rules from '@components/Rules';
import Menu from '@components/Menu';

export default function Home() {
  const heroRef = useRef(null);

  return (
    <>
      <div
        ref={heroRef}
        className="grid min-h-screen py-12 px-screen-10 bg-hero bg-cover lg:pl-screen-20"
      >
        <div className="content-start grid gap-y-3 text-right sm:content-center sm:gap-y-5">
          <h2 className="text-lg font-medium tracking-widest text-gray-900 uppercase whitespace-nowrap sm:text-xl">
            Reset Edition
          </h2>
          <Menu />
        </div>
        <div className="tracking-wider text-gray-300">
          <h1 className="mb-2 text-4xl sm:text-6xl">Slow Retreats</h1>
          <p className="text-lg sm:text-xl">
            Find strength in stillness and connection.
          </p>
        </div>
      </div>

      <main>
        <Program />
        <PackingList />
        <Rules />
        <NavButton heroInnerRef={heroRef} />
      </main>

      <footer className="flex items-center justify-center w-full h-12 mt-6 text-gray-100">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
