import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.open(to, '_blank', 'noopener,noreferrer');
  }, [to]);

  return null;
};

ExternalRedirect.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ExternalRedirect;