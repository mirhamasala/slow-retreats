import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

import Section from './Section';

const packingItems = [
  'swimwear',
  'warm sweaters',
  'rain coat',
  'walking sneakers or shoes',
  'yoga mat',
];

const leaveHomeItems = [
  'shampoo, conditioner, body soap',
  'more than one book',
];

function PackingList() {
  return (
    <Section id="packing-list" title="Packing List">
      <>
        <h3 className="pb-3 text-2xl">To bring</h3>
        <ul className="mb-6 space-y-2">
          {packingItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <PlusSmIcon className="h-4 pr-2" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="pb-3 text-2xl">Not to bring</h3>
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
