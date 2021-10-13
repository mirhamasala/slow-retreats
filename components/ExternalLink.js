import PropTypes from 'prop-types';

function ExternalLink({ href, children }) {
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

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

export default ExternalLink;
