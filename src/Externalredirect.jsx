import { useEffect } from 'react';

const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.open(to, '_blank', 'noopener,noreferrer');
  }, [to]);

  return null;
};

export default ExternalRedirect;