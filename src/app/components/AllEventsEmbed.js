// components/AllEventsEmbed.js
import { useEffect } from 'react';

const AllEventsEmbed = () => {
  useEffect(() => {
    // Ensure the script is loaded after the component mounts
    const script = document.createElement('script');
    script.src = "https://allevents.in/scripts/public/ae-plugin-embed-lib.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="ae-embed-org-plugin"
      data-button-text=""
      data-type="org"
      data-title="false"
      data-id="21671497"
      data-height=""
      data-width=""
      data-transparency="true"
      data-header="0"
      data-border="0"
      data-layout="center"
      style={{ width: '100%' }}
    ></div>
  );
};

export default AllEventsEmbed;
