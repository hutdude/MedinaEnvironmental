import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import sf330 from '../../assets/sf330.pdf'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function PDFViewer({pdfURL}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  }

  return (
    <div>
      <div className='bg-white z-30 w-full flex justify-center items-center gap-4'>
        
          <button className={`text-white bg-Dodger-Blue ${pageNumber <= 1 ? 'bg-Light-Gray' : 'hover:bg-blue-800 '} focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 rounded-rounded-6 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative z-30`} onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
            <ChevronLeftIcon className='w-8 h-8'/>
          </button>
        <span>Page {pageNumber} of {numPages}</span>
        
          <button className={`text-white bg-Dodger-Blue ${pageNumber >= numPages ? 'bg-Light-Gray' : 'hover:bg-blue-800 '} focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 rounded-rounded-6 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative z-30`} onClick={() => changePage(1)} disabled={pageNumber >= numPages}>
            <ChevronRightIcon className='w-8 h-8' />
          </button>
      </div>
      <Document file={sf330} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
        className="flex justify-center"
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      
    </div>
  );
}