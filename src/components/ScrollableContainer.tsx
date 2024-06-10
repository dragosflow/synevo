import React, { useState, useRef, ReactNode, MouseEvent } from "react";
import "../index.css"; // Ensure you have the custom CSS file for hiding the scrollbar

interface ScrollableContainerProps {
  children: ReactNode;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft + 10;
      const walk = (x - startX) * 2; // Adjust the scroll speed
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      className='overflow-x-scroll whitespace-nowrap scrollbar-hide p-5'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default ScrollableContainer;
