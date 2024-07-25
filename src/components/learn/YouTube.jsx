import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

const YouTubeGrid = () => {
  const timestamp = Date.now();
  const videosURL = `/api/wp-json/wp/v2/youtube-videos?acf_format=standard&_fields=id,title,acf&timestamp=${timestamp}`;
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const req = await fetch(videosURL, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          }
        });
        const videosData = await req.json();
        setVideos(videosData);
        setLoading(false);
        console.log('videos', videosData);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const sanitizeAndValidateEmbed = (embedCode) => {
    const sanitized = DOMPurify.sanitize(embedCode, {
      ADD_TAGS: ['iframe'],
      ADD_ATTR: ['src', 'height', 'width', 'frameborder', 'allowfullscreen', 'title'],
    });

    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitized, 'text/html');
    const iframe = doc.querySelector('iframe');

    if (iframe && iframe.src && iframe.src.startsWith('https://www.youtube.com/embed/')) {
      return sanitized;
    }

    return null; // Invalid embed
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <div className="text-white">Loading YouTube videos...</div>;
  }

  if (!videos || videos.length === 0) {
    return null;
  }

  const videosToShow = expanded ? videos : videos.slice(0, 2);

  return (
    <div className='bg-Dark-Navy p-4 relative h-full'>
      <h1 className="text-2xl text-center font-bold">
          Video Resources
        </h1>
      <div className='mx-auto justify-items-center grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 py-10 sm:pt-16 lg:mx-8 lg:max-w-none xl:grid-cols-2'>
        {videosToShow.map((video, index) => {
          const validEmbed = sanitizeAndValidateEmbed(video.acf.embed_code);
          return validEmbed ? (
            <div key={video.id} className="youtube-video flex flex-col items-center">
              <h3 className='text-white text-center font-bold text-lg mb-2'>{video.title.rendered}</h3>
              <div className='overflow-y-auto' dangerouslySetInnerHTML={{ __html: validEmbed }} />
            </div>
          ) : null;
        })}
      </div>
      {videos.length > 2 && (
        <div className="text-center mt-4">
          <button
            onClick={toggleExpanded}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-rounded-3"
          >
            {expanded ? 'Show Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default YouTubeGrid;