import PropTypes from 'prop-types';

function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-100 hover:text-gray-400 underline"
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

export default Link;
