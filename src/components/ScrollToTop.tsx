"use client"

import { useEffect, useState } from "react"

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    })
  }
  const [isHidden, setIsHidden] = useState(true)
  const [thresholdY, setThresholdY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY <= thresholdY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    const calculateThresholdY = () => {
      const viewportHeight = window.innerHeight;
      // Example: set the threshold value to 25% of the viewport height
      const percentage = 25;
      const newThresholdY = (viewportHeight * percentage) / 100;
      setThresholdY(newThresholdY);
    };

    calculateThresholdY(); // Initial calculation
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateThresholdY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateThresholdY);
    };
  }, [thresholdY]);
  return (<>
    {isHidden ? <></> : <div className='fixed bottom-2 right-2 z-30'><button onClick={scrollToTop}>Scroll to Top</button></div>}
  </>
  )
}

export default ScrollToTop;