import { useRef, useEffect } from 'react';
import { useTikTokFeed } from '../hooks/useTikTokFeed';
import { Loader2 } from 'lucide-react';

export default function Socials() {
  const { loading: tiktokLoading, error: tiktokError, username } = useTikTokFeed();

  return (
    <section id="socials" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Follow Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stay connected and see our latest updates on social media
          </p>
        </div>

        {/* Loading State */}
        {tiktokLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <p className="mt-2 text-gray-600 dark:text-gray-400">Loading feeds...</p>
          </div>
        )}

        {/* Error State */}
        {tiktokError && (
          <div className="text-center text-red-500 py-12">
            <p>{tiktokError}</p>
          </div>
        )}

        {/* Social Media Feeds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* TikTok Feed */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Latest on TikTok
            </h3>
            <div className="w-full flex justify-center">
              <blockquote 
                className="tiktok-embed"
                cite={`https://www.tiktok.com/${username}`}
                data-unique-id={username.replace('@', '')}
                data-embed-type="creator"
                style={{ maxWidth: '380px', minWidth: '288px' }}
              >
                <section>
                  <a href={`https://www.tiktok.com/${username}`}>
                    Eva Facial Clinic on TikTok
                  </a>
                </section>
              </blockquote>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Latest on Instagram
            </h3>
            <div className="w-full flex justify-center">
              <iframe
                title="Instagram Feed"
                src="https://www.instagram.com/evafacialclinic/embed"
                className="instagram-media instagram-media-rendered"
                style={{
                  background: 'white',
                  maxWidth: '380px',
                  width: '100%',
                  height: '450px',
                  border: 'none',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  padding: 0,
                }}
                allowTransparency="true"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
