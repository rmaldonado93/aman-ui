import React, { useState, useEffect, useRef } from 'react';

const CheckRender = () => {
  const [count, setCount] = useState(0);
  const myElementRef = useRef(null);

  useEffect(() => {
    if (myElementRef.current) {
      myElementRef.current.style.color = count % 2 === 0 ? 'blue' : 'red';
    }
    console.log(' render');

    return () => {
      console.log('Component will unmount');
    };
  }, [count]);



  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Functional Component with useRef and useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment Count</button>
      <div ref={myElementRef}>
        This is a DOM element that changes color based on the count.
      </div>
    </div>
  );
};

export default CheckRender;
