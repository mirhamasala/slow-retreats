import PropTypes from 'prop-types';

function Section({ id, title, children }) {
  const bgColor = id === 'packing-list' ? 'bg-gray-800' : 'bg-gray-900';

  return (
    <section
      id={id}
      className={`relative min-h-screen pt-7 pb-10 text-normal text-gray-300 leading-relaxed tracking-wide ${bgColor} sm:pt-6 sm:pb-12 sm:text-lg`}
    >
      <h2
        className={`sticky top-0 py-3 px-screen-10 text-2xl text-gray-100 capitalize tracking-wider ${bgColor} bg-opacity-80 sm:py-6 lg:px-screen-20  sm:text-4xl`}
      >
        {title}
      </h2>
      <div className="px-screen-10 lg:px-screen-20">{children}</div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
