import { rules } from '../constants/sections';

import Section from './Section';

function Rules() {
  return (
    <Section id={rules.id} title={rules.title}>
      <div className="mb-6 space-y-3 max-w-prose">
        <p>
          During our four days together, we'll strengthen the roots within
          ourselves and our circle with rituals and exercises that will benefit
          us long after the retreat.
        </p>
        <p>
          The inner strength that we'll discover and the knowledge that we were
          once part of a mighty tribe will guide us through difficulties in the
          future.
        </p>
        <p>
          The gift of presence is super powerful. By being present for others,
          we also allow our own lives to be immersed in the <i>Now</i>. It's a
          state of being typically quite hidden from us, buried in our busyness,
          that we'll now give space to reveal itself slowly.
        </p>
        <p>
          To be able to step into this flow, we need to nourish our little
          bubble and protect our state of mind. The following rules are designed
          to help us do just that.
        </p>
      </div>
      <ul className="list-decimal space-y-3 max-w-prose">
        <li>
          We'll switch off and hand over our electronic devices (phones,
          tablets, laptops, etc.) on day one of the retreat.
          <p className="mt-2 italic">
            This means we won't have any access to social media, work-related
            messages, or contact with our friends and family during the retreat. If you need to check in with home, a phone will be available for a
            5-minute phone call.
          </p>
        </li>
        <li>
          We won't take any photos, except for four Polaroids each day at a
          place of our choosing.
        </li>
        <li>
          We'll have lunch and dinner together, during which there'll be one
          conversation.
        </li>
        <li>We'll do our best not to complain.</li>
      </ul>
    </Section>
  );
}

export default Rules;
