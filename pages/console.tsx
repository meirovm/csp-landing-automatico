import React, { useRef, useEffect, useState } from 'react';
import { getRiftConsoleUrl, getRiftProviderPubApiKey } from "@/lib/cloudrift";

const Console = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isIframeReady, setIsIframeReady] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source === iframeRef.current?.contentWindow) {
        if (event.data.type === 'IFRAME_READY') {
          setIsIframeReady(true);

          // Send configuration
          iframeRef.current?.contentWindow?.postMessage({
            type: 'SET_PROVIDER_CONFIG',
            payload: {
              providerPubKey: getRiftProviderPubApiKey(),
              providerName: 'CloudRift',
              logo: 'https://storage.googleapis.com/cloudrift-resources/images/logo/cloudrift.svg',
              compoundLogo: 'https://storage.googleapis.com/cloudrift-resources/images/logo/cloudrift_compound_white.svg'
            }
          }, '*');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isIframeReady]);

  return (
    <>
      <iframe
        allow="clipboard-read; clipboard-write"
        ref={iframeRef}
        src={getRiftConsoleUrl()}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      />
    </>
  );
};

export default Console;