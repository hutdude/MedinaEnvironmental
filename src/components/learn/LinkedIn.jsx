import React, { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import './LinkedIn.css'

const LinkedInFeed = ({showAll}) => {
  const timestamp = Date.now();
  const postsURL = `/api/wp-json/wp/v2/linkedinposts?acf_format=standard&_fields=id,title,acf&timestamp=${timestamp}`;
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(showAll);
  const feedRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const req = await fetch(postsURL, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          }
        });
        const postsData = await req.json();
        setPosts(postsData);
        setLoading(false);
        console.log('posts', postsData);

        // Scroll to the element after posts are loaded
        if (location.hash) {
          const id = location.hash.replace('#', '');
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              setExpanded(true);
              setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 100);
            }
          }, 500); // Increased delay to ensure DOM is ready
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.style.opacity = expanded ? '1' : '0';
      feedRef.current.style.maxHeight = expanded ? '100000px' : '0';
    }
  }, [expanded]);

  const sanitizeAndValidateEmbed = (embedCode) => {
    const sanitized = DOMPurify.sanitize(embedCode, {
      ADD_TAGS: ['iframe'],
      ADD_ATTR: ['src', 'height', 'width', 'frameborder', 'allowfullscreen', 'title'],
    });

    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitized, 'text/html');
    const iframe = doc.querySelector('iframe');

    if (iframe && iframe.src && iframe.src.startsWith('https://www.linkedin.com/embed/')) {
      return sanitized;
    }

    return null; // Invalid embed
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <div className="text-white">Loading LinkedIn posts...</div>;
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  const postsToShow = expanded ? posts : posts.slice(0, 2);
  
  return (
    <div className='bg-Dark-Navy p-4'>
      <h1 className="text-2xl text-center font-bold">
          From our LinkedIn
        </h1>
      <div className='mx-auto justify-items-center grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 py-10 sm:pt-16 lg:mx-8 lg:max-w-none xl:grid-cols-2'>
        {postsToShow.map((post, index) => {
          const validEmbed = sanitizeAndValidateEmbed(post.acf.embed);
          return validEmbed ? (
            <div key={post.id} id={"linked-in-" + post.id} className="linkedin-post w-full max-w-xl mx-auto flex flex-col items-center">
              <h3 className='text-white text-center font-bold text-lg mb-2'>{post.title.rendered}</h3>
              <div className='overflow-y-auto relative' dangerouslySetInnerHTML={{ __html: validEmbed }} />
            </div>
          ) : null;
        })}
      </div>
      {posts.length > 2 && (
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

export default LinkedInFeed;