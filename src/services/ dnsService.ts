export const validateDNSRecords = async (domain: string) => {
    try {
      const response = await fetch(`/api/dns/validate?domain=${domain}`);
      return await response.json();
    } catch (error) {
      console.error('Error validating DNS records:', error);
    }
  };
  