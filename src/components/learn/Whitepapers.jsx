import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import './LinkedIn.css'
import { Link } from 'react-router-dom';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

const Whitepapers = () => {
  const timestamp = Date.now();
  const papersURL = `/api/wp-json/wp/v2/whitepapers?acf_format=standard&_fields=id,title,acf&timestamp=${timestamp}`;
  const [papers, setPapers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const req = await fetch(papersURL, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          }
        });
        const papersData = await req.json();
        setPapers(papersData);
        setLoading(false);
        console.log('papers', papersData);
      } catch (error) {
        console.error('Error fetching papers:', error);
        setLoading(false);
      }
    };
    fetchPapers();
  }, []);

  

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <div className="text-white">Loading LinkedIn papers...</div>;
  }

  if (!papers || papers.length === 0) {
    return null;
  }

  const handleDownload = (pdfUrl, fileName) => {
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('An error occurred while downloading the file.'));
  };

  const papersToShow = expanded ? papers : papers.slice(0, 2);

  return (
    <div className='bg-Dark-Navy p-4'>
      <h1 className="text-2xl text-center font-bold">
          Download our Whitepapers
        </h1>
      <div className='mx-auto justify-items-center grid max-w-2xl grid-cols-1 gap-y-16 border-t border-gray-200 py-10 sm:pt-16 lg:mx-8 lg:max-w-none xl:grid-cols-2'>
      {papersToShow.map((paper) => {
        return (
          <div key={paper.id} className="w-full max-w-xl mx-auto flex flex-col items-center">
            <h3 className='text-white text-center font-bold text-lg mb-2'>{paper.title.rendered}</h3>
            <button
              type='button'
              onClick={() => handleDownload(paper.acf.pdf, `${paper.title.rendered}.pdf`)}
              className={`px-4 py-2 hover:scale-105 text-base md:text-lg tracking-wider md:h-20 w-60 rounded-rounded-6 award-winning-bg text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
            >
              <div className="flex items-center justify-between">
                Download
                <ArrowDownCircleIcon className="h-12" />
              </div>
            </button>
          </div>
        );
      })}
      </div>
      {papers.length > 2 && (
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

export default Whitepapers;