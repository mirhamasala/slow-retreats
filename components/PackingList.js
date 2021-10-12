import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

import { packingList } from '../constants/sections';

import Section from './Section';

const packingItems = [
  'swimwear',
  'sunglasses',
  'PJs',
  'comfy loungewear',
  'warm sweaters',
  'house slippers',
  'raincoat',
  'walking sneakers or shoes',
  'yoga mat',
  'a book (only Kindle or physical)',
];

const leaveHomeItems = [
  'shampoo, conditioner, body soap',
  'towels',
  'more than one book',
];

function PackingList() {
  return (
    <Section id={packingList.id} title={packingList.title}>
      <>
        <h3 className="pb-2 text-xl text-gray-100 tracking-wider sm:pb-3 sm:text-2xl">
          To bring
        </h3>
        <ul className="mb-6 space-y-2">
          {packingItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <PlusSmIcon className="h-4 pr-2" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="pb-2 text-xl text-gray-100 tracking-wider sm:pb-3  sm:text-2xl">
          Not to bring
        </h3>
        <ul className="space-y-2">
          {leaveHomeItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <MinusSmIcon className="h-4 pr-2" />
              {item}
            </li>
          ))}
        </ul>
      </>
    </Section>
  );
}

export default PackingList;
