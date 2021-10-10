import { rules } from '../constants/sections';

import Section from './Section';

function Rules() {
  return (
    <Section id={rules.id} title={rules.title}>
      <div className="mb-6 space-y-3">
        <p>
          During our four days together, we'll strengthen the roots within
          ourselves and our circle with rituals and exercises that will nourish
          us long after the retreat.
        </p>
        <p>
          The inner strength that we'll discover and the knowledge that we were
          once part of a mighty tribe will guide us through difficulties in the
          future.
        </p>
        <p>
          There's no more wonderful gift than the gift of presence. By being
          present for others, we also allow our own lives to be immersed in the
          now. It's a state of being typically quite hidden from us, buried in
          our busyness, that will now allow to slowly reveal itself.
        </p>
        <p>
          To be able to step into this flow, we need to nourish our little
          bubble and protect our state of mind. The following rules are designed
          to helps us do just that.
        </p>
      </div>
      <ul className="list-decimal space-y-3">
        <li>We’ll have lunch and dinner together.</li>
        <li>
          We’ll switch off and hand over our electronic devices (phones, iPads,
          laptops, etc.)
          <p className="mt-2 italic">
            This means we won't have any outside contact with out friends and
            family nor will we have access to any work related messages, social
            media, etc. If you really need to touch base with home, you'll be
            provided a phone which you can use for a 5-minute call.
          </p>
        </li>
        <li>
          We won't make photos. To remember the retreat, we'll take four
          Polariods each day at a place of our choosing.
        </li>
        <li>We'll do our best not to complain.</li>
      </ul>
    </Section>
  );
}

export default Rules;
