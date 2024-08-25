import {useState} from 'react';


const StateHook = () => {

    let [name, setName] = useState("Pratham Gupta initial");
    let [age, setAge] = useState(21);
    const nameVar = "Pratham Gupta Rocks!!!";

    function printSomething(){
        console.log(`Hello ${nameVar}`);
    }

    printSomething();

    function changeValues(){
        // console.log(typeof nameState); //object (array)
        // console.dir()
        // Change the name to Rohan using hooks
        setName("Rohan Gupta");
        setAge(30);
    }

    return ( 
        <section>
            <h2>This is StateHook section</h2>
            <p>My name is {name} and I am {age} years old.</p>
            <button onClick={changeValues}>Click Button</button>
        </section>
     );
}
 
export default StateHook;