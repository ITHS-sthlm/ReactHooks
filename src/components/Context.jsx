// Import React library to use its features
import React from 'react'
// Import the useContext Hook from the React library
import { useContext } from 'react'

// Create a new Context called 'NumberContext'
// This context will allow us to share a value across components
export const NumberContext = React.createContext()
// This line creates a context and returns an object with two
// values: { Provider, Consumer }
// 'Provider' is used to provide the value to components
// 'Consumer' is used to consume the value from the Provider

// Create a component called 'Context'
// This component will consume the value from 'NumberContext'
const Context = () => {
    // Use the 'useContext' Hook to access the value from 'NumberContext'
    const number = useContext(NumberContext)

    // Display the value received from the context
    return <div>Number from Context: {number}</div>
}

// Export the 'Context' component
export default Context
