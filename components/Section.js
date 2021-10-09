import PropTypes from 'prop-types';

function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen">
      <h2 className="pt-10 text-4xl text-gray-200 capitalize tracking-wide">
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
