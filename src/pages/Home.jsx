// Import the State, Effect, and Context components
import State from '../components/State'
import Effect from '../components/Effect'
import Context from '../components/Context'
import Reducer from '../components/Reducer'
// Besides importing the Context Component,
// we also need to import our NumberContext functionality from the Context Component
import { NumberContext } from '../components/Context'
import CustomHookExample from '../components/Custom'
import UseRef from '../components/UseRef'

// Define a component called 'Home'
function Home() {
    // Use the Provider to make a value available to all
    // children and grandchildren

    // Wrap the components with NumberContext.Provider to provide a value
    return (
        <>
            {/* Here, we provide the value '43' to be used by child components */}

            {/* Render the State component */}
            <State />
            {/* Render the Effect component */}
            <Effect />
            {/* Render the Context component */}
            <NumberContext.Provider value={43}>
                <Context />
            </NumberContext.Provider>
            <Reducer />
            <CustomHookExample />
            <UseRef />

        </>
    )
}

// Export the 'Home' component so it can be used in other parts of the app
export default Home
