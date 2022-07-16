import { useEffect, useState } from 'react';

export const useMobileAgentCheck = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (navigator) {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      );
      setIsAndroid(
        /Android/i.test(navigator.userAgent),
      );
      setIsIphone(
        /iPhone|iPad|iPod/i.test(navigator.userAgent),
      );
    }
  }, []);

  return { isMobile, isIphone, isAndroid };
};
