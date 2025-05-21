import { useState, useEffect } from 'react';

// TikTok account details
const TIKTOK_USERNAME = '@evafacialclinic';

// Sample video IDs - replace these with actual video IDs from your TikTok posts
const PINNED_VIDEO = {
  id: '7331234567890123456', // Replace with your pinned video ID
  url: `https://www.tiktok.com/${TIKTOK_USERNAME}/video/7331234567890123456` // Replace with actual video URL
};

export const useTikTokFeed = () => {
  const [pinnedVideo, setPinnedVideo] = useState(PINNED_VIDEO);
  const [latestVideos, setLatestVideos] = useState([
    // Add 4 latest video IDs from your TikTok account
    {
      id: '7331234567890123457',
      url: `https://www.tiktok.com/${TIKTOK_USERNAME}/video/7331234567890123457`
    },
    {
      id: '7331234567890123458',
      url: `https://www.tiktok.com/${TIKTOK_USERNAME}/video/7331234567890123458`
    },
    {
      id: '7331234567890123459',
      url: `https://www.tiktok.com/${TIKTOK_USERNAME}/video/7331234567890123459`
    },
    {
      id: '7331234567890123460',
      url: `https://www.tiktok.com/${TIKTOK_USERNAME}/video/7331234567890123460`
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load TikTok Embed SDK
    const loadTikTokScript = () => {
      const existingScript = document.getElementById('tiktok-embed-sdk');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'tiktok-embed-sdk';
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          setLoading(false);
          // Trigger TikTok embed initialization
          if (window.tiktok && window.tiktok.reload) {
            window.tiktok.reload();
          }
        };

        script.onerror = () => {
          setError('Failed to load TikTok embed script');
          setLoading(false);
        };
      } else {
        setLoading(false);
      }
    };

    loadTikTokScript();

    // Cleanup
    return () => {
      const script = document.getElementById('tiktok-embed-sdk');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const refreshVideos = () => {
    setLoading(true);
    if (window.tiktok && window.tiktok.reload) {
      window.tiktok.reload();
    }
    setTimeout(() => setLoading(false), 1000);
  };

  return { 
    pinnedVideo, 
    latestVideos, 
    loading, 
    error, 
    refreshVideos,
    username: TIKTOK_USERNAME
  };
}; 