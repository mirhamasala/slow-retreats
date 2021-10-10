import { MapIcon } from '@heroicons/react/outline';

import { program } from '../constants/sections';

import Link from './Link';
import Section from './Section';

function Program() {
  return (
    <Section id={program.id} title={program.title}>
      <a
        href="https://www.google.com/maps/d/u/0/edit?mid=1Hm6ElwdFUFTdzqfedI4gFBUIpRlDdUAW"
        target="_blank"
        rel="noreferrer"
        className="flex items-center text-gray-100 hover:text-gray-400"
      >
        <MapIcon className="h-8 mr-2" />
        <span>Map</span>
      </a>
      <h3 className="pt-6 pb-3 text-2xl text-gray-100 tracking-wider capitalize">
        Daily Schedule
      </h3>
      <ul className="mb-6 space-y-2">
        <li>
          07:00 – 08:30 Morning pages, gratefulness practice, yoga, meditation
          in silence
        </li>
        <li>08:30 – 09:30 Breakfast</li>
        <li>09:30 – 11:30 Silence walk</li>
        <li>12:30 – 14:30 Lunch</li>
        <li>14:30 – 15:30 Free time</li>
        <li>15:30 – 17:00 Workshops</li>
        <li>17:00 – 18:00 Dinner prep</li>
        <li>18:00 - 20:00 Dinner conversations</li>
        <li>20:00 – 21:00 Fire meditation, reading time</li>
      </ul>
      <h3 className="pb-3 text-2xl text-gray-100 tracking-wider capitalize">
        Day-Specific Details
      </h3>
      <ul className="mb-6 space-y-2">
        <li>
          1: <span>São Lorenço</span> ·{' '}
          <Link href="https://goo.gl/maps/nmnN5rwpoYDdo75V7">Naval</Link> ·{' '}
          <span>Ericeira</span> · <span>Flower Workshop</span>
        </li>
        <li>
          2: <span>Coxos</span> ·{' '}
          <Link href="https://g.page/matsusushiandwine?share">
            Matsu Sushi & Wine
          </Link>{' '}
          ·{' '}
          <span>
            Introduction to{' '}
            <Link href="https://www.wimhofmethod.com/breathing-exercises">
              Wim Hof Method
            </Link>
          </span>
        </li>
        <li>
          3: <span>Foz do Lizandro</span> ·{' '}
          <Link href="http://souldoughpizza.com">Souldough</Link> ·{' '}
          <span>Loz Workshop</span>
        </li>
        <li>
          4: <span>Dune walk</span> ·{' '}
          <Link href="https://la-popular-taberna.business.site/">
            Taberna La Popular
          </Link>{' '}
          · <span>Silvia Workshop</span>
        </li>
      </ul>
    </Section>
  );
}

export default Program;
