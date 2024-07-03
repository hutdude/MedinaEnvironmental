// src/components/IdukkiEmbed.js
import React, { useEffect } from 'react';

const IdukkiEmbed = () => {
  useEffect(() => {
    // Ensure the script runs after the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.idukki.io/version/script_0';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link href='https://assets.idukki.io/version/style_1' rel='stylesheet' />
      <div
        data-ugc='idukki'
        data-bguid='bc0a2940-866e-4b83-8ae0-15fadae478d0'
        data-guid='cd7e5516-e867-4e03-bd2e-4778658e169a'
        data-version='108'
      ></div>
    </div>
  );
};

export default IdukkiEmbed;
