// Import React and useState from the 'react' library
import { useState } from 'react';

// Define a custom hook called 'useLocalStorage'
// This hook manages data storage in local storage
const useLocalStorage = (key, initialValue) => {
  // Get the stored value from local storage or use the initial value
  const storedValue = localStorage.getItem(key) || initialValue;

  // Set up state to manage the current value
  const [value, setValue] = useState(storedValue);

  // Define a function to update the value and local storage
  const updateValue = (newValue) => {
    setValue(newValue); // Update the value in the component state
    localStorage.setItem(key, newValue); // Update the value in local storage
  };

  // Return the current value and the function to update it
  return [value, updateValue];
};

// Define a component called 'CustomHookExample'
const CustomHookExample = () => {
  // Use the custom 'useLocalStorage' hook to manage a value in local storage
  const [name, setName] = useLocalStorage('username', '');

  // Render an input field to update the stored name
  return (
    <div>
      <p>Hello, {name || 'Guest'}!</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

// Export the 'LocalStorageExample' component
export default CustomHookExample;
