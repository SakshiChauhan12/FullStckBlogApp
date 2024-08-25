const Events = () => {

    function handleClick(){
        console.log('Button-1 clicked');
    }
    function greet(){
        console.log('Hello, this is a greet function');
    }
    function greetWithName(name){
        // console.log(typeof name); // object ?? HW for me
        console.log('Hello, ' + name);
    }

    function wrapperFunction(){
        greetWithName("Pratham Gupta");
    }

    function handleClickWithEvent(event){
        console.log(event);
        console.log('Button-5 clicked with event');
    }

    function handleClickWithEventAndName(event, name){
        console.log(event);
        console.log('Hello, ' + name);
    }

    function handleClickWithEventAndNameWrapper(event){
        handleClickWithEventAndName(event, "Pratham Gupta");
    }


    return (
        <section>
            <button onClick={greet}>Button-1</button>
            <br /> <br />
            {/* <button onClick={greetWithName}>Button-2</button> */}

            <button onClick={() => greetWithName("Pratham Gupta")}>Button-3</button>
            <br /> <br />
            <button onClick={wrapperFunction}>Button-4</button>
            <br /> <br />
            <button onClick={handleClickWithEvent}>Button-5</button>
            {/* Q: Create a button-6, and pass name variable and read event object */}
            <br /><br />
            <button onClick={handleClickWithEventAndNameWrapper}>Button-6</button>
            {/* Q: Achieve the same thing with anonymous function */}
            <br /> <br />
            <button onClick={(e) => handleClickWithEventAndName("Pratham", e)}>Button-7</button>

        </section>
    );
}

export default Events;