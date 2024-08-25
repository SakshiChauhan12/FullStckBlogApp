import { useEffect, useState } from "react";
const Cleanup = () => {

    const [count, setCount] = useState(0);

    // useEffect is called every time the component is rendered
    // cleanup function is called before the component is removed
    
    // 1. Return the callback function from the useEffect hook

    useEffect(() => {
        console.log("cleanup useEffect is called");


        return () => {
            console.log("De-rendering the cleanup component");
        }
    }, [count]);

    return (
        <section>
            <h2>Cleanup</h2>
            <p>
                The cleanup function is used to clean up the side effects in a useEffect hook. 
                The cleanup function is called before the component is removed. 
                This is useful for cleaning up any pending API calls or clearing the timers.
            </p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    );
}

export default Cleanup;
