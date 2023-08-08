//Importing useState and useEffect
import { useState, useEffect } from 'react'

const Effect = () => {
    /* Our useState */
    const [data, setData] = useState([])
    /* inside our useEffect we use a simple fetching from an adress that has "dummy"
data and when the data is fetched it sets the data */
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <ul>
            {/* Here we map out our data from our fetch, in this case
            the data we get from the API is a title (it could be whatever it
            depends on what API you choose) */}
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default Effect
