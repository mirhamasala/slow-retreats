import PropTypes from 'prop-types';

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2 className="pb-5 text-2xl text-gray-100 capitalize tracking-wider sm:pb-8 sm:text-4xl">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
