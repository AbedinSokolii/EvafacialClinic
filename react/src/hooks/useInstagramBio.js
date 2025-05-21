import { useState, useEffect } from 'react';

export function useInstagramBio() {
  const [bioData, setBioData] = useState({
    name: "Eva Facial Clinic",
    biography: "✨ Professional Skincare & Beauty",
    business_hours: {
      mon_fri: "09:00 - 20:00",
      saturday: "10:00 - 18:00",
      sunday: "Closed"
    },
    services: [
      "Professional Facial Treatments",
      "Expert Skincare Solutions",
      "Premium Products & Services",
      "LED Light Therapy",
      "Hydra Facial",
      "Chemical Peels",
      "Microdermabrasion",
      "Oxygen Facial",
      "Anti-Aging Treatments"
    ],
    contact: {
      phone: "+383(0)43881061",
      location: "Prishtina, Kosovo"
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramBio = async () => {
      try {
        setLoading(true);
        // When you have your Instagram API token, uncomment and use this code:
        /*
        const response = await fetch(
          `https://graph.instagram.com/me?fields=biography,name,website,media_count&access_token=${process.env.VITE_INSTAGRAM_ACCESS_TOKEN}`
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        setBioData(prevData => ({
          ...prevData,
          name: data.name,
          biography: data.biography
        }));
        */
        
        // For now, we'll just simulate loading
        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram bio:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInstagramBio();

    // Refresh bio data every hour
    const interval = setInterval(fetchInstagramBio, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { bioData, loading, error };
} 