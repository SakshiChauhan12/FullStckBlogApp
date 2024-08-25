import { useState, useEffect } from 'react';

const UseEffectHook = () => {

    const [name, setName] = useState('Pratham');
    const [age, setAge] = useState(20);
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setName('Rohan Sharma');
        // setAge(21);
        setCounter(counter + 1);
    }

    useEffect( () =>  {
        console.log('UseEffect Hook');
    } , [counter]);

    return (
        <section>
            <h2>UseEffect Hook</h2>
            <p>My name is {name} and I am {age} years old.</p>
            <p>The counter is at: {counter}</p>
            <button onClick={handleClick}>Click to Change the text</button>
        </section>
    );
}

export default UseEffectHook;