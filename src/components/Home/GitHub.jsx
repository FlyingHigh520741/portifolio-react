import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [fontSize, setFontSize] = useState(12);

  const temaFiap = {
    light: ['#151b23', '#2a2ca9', '#3333e4', '#b2b3ea', '#bcb2f6'],
    dark: ['#151b23', '#2a2ca9', '#3333e4', '#b2b3ea', '#bcb2f6'],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setFontSize(7); 
      } else {
        setFontSize(12);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <GitHubCalendar 
        fontSize={fontSize} 
        theme={temaFiap} 
        username="FlyingHigh520741" 
      />
    </div>
  );
}

export default Github;
