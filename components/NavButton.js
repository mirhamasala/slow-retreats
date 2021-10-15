import { ArrowNarrowUpIcon } from '@heroicons/react/outline';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function NavButton({ heroInnerRef }) {
  const buttonRef = useRef(null);
  const [heroIsVisible, setHeroIsVisible] = useState(null);

  useEffect(() => {
    const hideWhenBoxInView = new IntersectionObserver((entries) => {
      /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
      entries[0].intersectionRatio <= 0
        ? setHeroIsVisible(false)
        : setHeroIsVisible(true);
    });

    hideWhenBoxInView.observe(heroInnerRef.current);
  });

  return (
    <>
      {!heroIsVisible && (
        <button
          ref={buttonRef}
          type="button"
          onClick={() =>
            heroInnerRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          className="fixed bottom-18 right-screen-10 w-5 h-5 p-5 border-2 rounded-full text-gray-200 bg-gray-900 lg:right-screen-20 sm:w-6 sm:h-6 sm:p-6"
        >
          <ArrowNarrowUpIcon className="absolute inset-1/2 h-5 sm:h-6 -translate-x-1/2 -translate-y-1/2" />
        </button>
      )}
    </>
  );
}

NavButton.propTypes = {
  heroInnerRef: PropTypes.object,
};

export default NavButton;
