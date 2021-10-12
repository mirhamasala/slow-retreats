import Link from 'next/link';
import { sections } from '../constants/sections';

function Menu() {
  return (
    <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl">
      {sections.map((section) => (
        <li key={section.id}>
          <Link href={`#${section.id}`}>
            <a className="text-gray-700 capitalize whitespace-nowrap hover:text-gray-800 focus:text-gray-900">
              {section.title} <span>&#8212;</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
