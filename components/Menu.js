import Link from 'next/link';
import sections from '../constants/sections';

function Menu() {
  return (
    <ul className="self-start pt-24 pr-24 space-y-3 text-xl text-right">
      {sections.map((section) => (
        <li key={section.id}>
          <Link href={`#${section.id}`}>
            <a className="cursor-pointer text-gray-500 capitalize whitespace-nowrap hover:text-gray-700 focus:text-gray-800">
              {section.title} <span>&#8212;</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
