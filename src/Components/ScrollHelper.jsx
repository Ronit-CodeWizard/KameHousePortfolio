import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

export default function ScrollHelper() {

  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let timeoutRef = null;

  const isMobile = () => {
    return ( ( window.innerWidth <= 1000 ) && ( window.innerHeight <= 800 ) );
  }

  useEffect(() => {
    timeoutRef = setTimeout(() => {
      if (!scrolled) {
        setShowScrollIcon(true);
      }
    }, 4000);

    const handleScrollOrTouch = () => {
      setScrolled(true);
      setShowScrollIcon(false);
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };

    window.addEventListener("wheel", handleScrollOrTouch);
    window.addEventListener("touchmove", handleScrollOrTouch);

    return () => {
      window.removeEventListener("wheel", handleScrollOrTouch);
      window.removeEventListener("touchmove", handleScrollOrTouch);
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };
  }, [scrolled]);

  return (
    <Html center>
      {showScrollIcon && (
        <img
          style={{
            width: "30vh",
            cursor: "pointer",
          }}
          src={ isMobile() ? "./Textures/scrollMob.png" : "./Textures/scrollPC.png" }
          alt="Scroll Icon"
        />
      )}
    </Html>
  );
}
