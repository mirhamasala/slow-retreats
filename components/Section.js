import PropTypes from 'prop-types';

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2 className="pb-8 text-4xl text-gray-100 capitalize tracking-wider">
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
