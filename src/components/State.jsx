//Remember to always import the hooks like we do below between the
//the parenthesis
import { useState } from 'react'

const State = () => {
    /* This is the way we use useState
    - count is the current state
    - setCount is the new state
    - our useState in (0) is the default value before we change it
    and if it would be letters the default state could be ("")
 */
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* Here we show the current state */}
            <p>Count: {count}</p>

            {/* We use onClick to wake the function and set a new state
            whenever we click the buttonm in this case we have a simple one where
            the count is adding +1 everytime it is changed */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default State
