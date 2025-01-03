import { useState, useEffect } from 'react';

const useDNSValidation = (domain: string) => {
  const [status, setStatus] = useState<string>('Pending');
  
  useEffect(() => {
    // Simulated API call to validate DNS records
    setTimeout(() => {
      if (domain === 'example.com') setStatus('Valid');
      else setStatus('Invalid');
    }, 2000);
  }, [domain]);

  return status;
};

export default useDNSValidation;
