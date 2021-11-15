import { MapIcon } from '@heroicons/react/outline';

import { program } from '../constants/sections';

import ExternalLink from './ExternalLink';
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
      <h3 className="pt-3 pb-2 text-xl text-gray-100 tracking-wider sm:pt-6 sm:pb-3 sm:text-2xl">
        Daily schedule
      </h3>
      <ul className="mb-7 space-y-2 max-w-prose">
        <li>
          07:00 – 08:30 Meditation, yoga, morning pages, gratefulness
          practice—in silence
        </li>
        <li>08:30 – 09:30 Breakfast—in silence</li>
        <li>09:30 – 11:30 Silent beach walk</li>
        <li>12:30 – 14:30 Lunch</li>
        <li>14:30 – 16:00 Free time, grocery shopping</li>
        <li>16:00 – 17:00 Workshops, talks</li>
        <li>17:00 – 18:00 Dinner prep</li>
        <li>18:00 - 20:00 Dinner time, conversations</li>
        <li>20:00 – 21:00 Fire meditation, reading time</li>
      </ul>
      <h3 className="pb-2 text-xl text-gray-100 tracking-wider sm:pb-3 sm:text-2xl">
        Day-specific details
      </h3>
      <ol className="list-decimal mb-6 space-y-2 max-w-prose">
        <li>
          <span>
            São Lorenço ·{" "}
            <ExternalLink href="https://www.google.com/maps?cid=19492761283722315">
              Onegai Sushi Bar
            </ExternalLink>{" "}
            · Ericeira · Flower workshop · Dinner Mirha + Silvia
          </span>
        </li>
        <li>
          <span>
            Ribeira D'Ilhas ·{" "}
            <ExternalLink href="https://www.google.com/maps?cid=908569003224039559">
              Naval
            </ExternalLink>{" "}
            · Introduction to{" "}
            <ExternalLink href="https://www.wimhofmethod.com/breathing-exercises">
              Wim Hof Method
            </ExternalLink>{" "}
            · Dinner Laura + Carly
          </span>
        </li>
        <li>
          <span>
            Foz do Lizandro ·{" "}
            <ExternalLink href="https://www.google.com/maps?cid=10455604447369111830">
              A Bica
            </ExternalLink>{" "}
            · Self-care workshop · Dinner Silvia + Laura
          </span>
        </li>
        <li>
          <span>
            Praia de São Julião ·{" "}
            <ExternalLink href="https://www.google.com/maps?cid=9675229999809966912">
              Tik Tapas
            </ExternalLink>{" "}
            · Minimalism workshop · Dinner Carly + Mirha
          </span>
        </li>
      </ol>
    </Section>
  );
}

export default Program;
