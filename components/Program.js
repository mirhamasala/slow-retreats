import { program } from '../constants/sections';

import Section from './Section';

function Program() {
  return (
    <Section id={program.id} title={program.title}>
      <h3 className="pb-3 text-2xl capitalize">Daily Schedule</h3>
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
      <h3 className="pb-3 text-2xl capitalize">Day-Specific Details</h3>
      <ul className="mb-6 space-y-2">
        <li>
          1: <span>Foz do Lizandro</span> ·{' '}
          <a href="http://souldoughpizza.com">Souldough</a> ·{' '}
          <span>
            Introduction to{' '}
            <a href="https://www.wimhofmethod.com/breathing-exercises">
              Wim Hof Method
            </a>
          </span>
        </li>
        <li>
          2: <span>Ericeira</span> ·{' '}
          <a href="https://goo.gl/maps/nmnN5rwpoYDdo75V7">Naval</a> ·{' '}
          <span>Flower Workshop</span>
        </li>
        <li>
          3: <span>Coxos</span> ·{' '}
          <a href="https://g.page/matsusushiandwine?share">
            Matsu Sushi & Wine
          </a>{' '}
          · <span>Loz Workshop</span>
        </li>
        <li>
          4: <span>Dune walk</span> ·{' '}
          <a href="https://la-popular-taberna.business.site/">
            Taberna La Popular
          </a>{' '}
          · <span>Silvia Workshop</span>
        </li>
      </ul>
    </Section>
  );
}

export default Program;