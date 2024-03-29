import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import './styles.css'

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <div className='teste'>

      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <li
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Item {i}
          </li>
        ))}
      </ul>

      </div>
      {/* <div>
        {activePageIndex + 1} / {pages.length}
      </div> */}
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
     {/*  <ol style={{ display: 'flex' }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol> */}
    </>
  );
};

export default AdvancedCarousel;