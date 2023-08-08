import { useRef } from 'react';

const UseRef = () => {
  // Create a ref to store a DOM element
  const myButtonRef = useRef(null);

  // Access the DOM element and add a click event listener
  const handleClick = () => {
    myButtonRef.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      <button ref={myButtonRef} onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default UseRef;
