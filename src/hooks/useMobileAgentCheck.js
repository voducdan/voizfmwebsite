import { useEffect, useState } from 'react';

export const useMobileAgentCheck = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);


  useEffect(() => {
    if (navigator) {
      setIsAndroid(
        /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      );
      setIsIOS(
        /iPhone|iPad|iPod/i.test(navigator.userAgent),
      );
    }
  }, []);

  return { isIOS, isAndroid };
};
