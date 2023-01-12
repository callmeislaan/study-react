import { useState } from "react";

function DemoUseState() {
    const [color, setColor] = useState("red");
    // console.log("changed " + color);
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        </>
    );
}

function DemoUseStateWithObject() {
    const [car, setCar] = useState({
        brand: "Ford",
        year: 1995,
        color: "red"
    });

    const updateColor = () => {
        setCar((previousState) => {
                return {...previousState, color: "blue"}
            }
        )
    };

    const updateYear = () => {
        setCar((previousState => {
            return {...previousState, year: 2020}
        }))
    }

    return (
        <>
            <h1>Demo use state with object car: {car.brand} - {car.year} - {car.color} </h1>
            <button type="button" onClick={updateColor}>Update color</button>
            <button type="button" onClick={updateYear}>Update year</button>
        </>
    );
}

export {DemoUseStateWithObject};

export default DemoUseState;