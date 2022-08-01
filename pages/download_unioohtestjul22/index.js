import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useMobileAgentCheck } from '../../src/hooks/useMobileAgentCheck';

function DownloadTestPage() {
  const router = useRouter();
  const { isIphone, isAndroid } = useMobileAgentCheck();
  let redirectUrl = '/';
  if (isIphone) redirectUrl = 'https://apps.apple.com/us/app/voiz-fm-s%C3%A1ch-n%C3%B3i-podcast/id1447395824?ppid=39f15d5d-1a2c-464f-b745-08b400375c25';
  if (isAndroid) redirectUrl = 'https://play.google.com/store/apps/details?id=com.wewe.musicsounds&listing=unioohtestingjul22';
  useEffect(() => {
    router.push(redirectUrl);
  });

  return (
    <div></div>
  );
};

export default DownloadTestPage;
