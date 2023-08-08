// Import the useReducer Hook from the 'react' library
import { useReducer } from 'react';

// Define the initial state for the counter
const initialState = { count: 0 };

// Define a reducer function that handles state updates based on actions
const reducer = (state, action) => {
  // The reducer checks the action type and updates the state accordingly
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Define a component called 'CounterWithReducer'
const CounterWithReducer = () => {
  // Use the useReducer Hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render the component's UI
  return (
    <div>
      {/* Display the current count from the state */}
      <p>Count: {state.count}</p>
      {/* Button to increment the count */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      {/* Button to decrement the count */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

// Export the 'CounterWithReducer' component
export default CounterWithReducer;
