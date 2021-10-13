import { sections } from '../constants/sections';

function Menu() {
  return (
    <ul className="space-y-2 text-lg sm:space-y-3 sm:text-xl">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="text-gray-700 capitalize whitespace-nowrap hover:text-gray-800 focus:text-gray-900"
          >
            {section.title} <span>&#8212;</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
