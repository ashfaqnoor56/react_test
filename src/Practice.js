import React, { useState } from 'react'

const Practice = () => {
    //green color btn 1 to 10
    //red color btn 11 to 15
    //never allow more than 15 and less than 0
    const [count, setCount] = useState(0)
    function Increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount(count - 1)
    }

    const [color, setColor] = useState("black");
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");

    const [car, setCar] = useState({
        brand: "Jaguar",
        model: "F1",
        year: "1964",
        color: "red"
    })
    const [click, setClick] = useState('GeeksForGeeks');
    const [count1, setCount1] = useState(0)
    const [name, setName] = useState("Ihechikara");
    const changeName = () => {
        setName("Chikara");
        
    }
        return (
            <div>
                <p>Add and Subtract</p>
                <button onClick={Increase}>+</button>
                <span>{count}</span>
                <button onClick={decrease}>-</button>
                <h1>My favorite color is {color}!</h1>

                <h1>My {brand}</h1>
                <p>It is a {color} {model} from {year}.</p>

                <h1>My {car.brand}</h1>
                <p>It is a {car.color} {car.model} from {car.year}.</p>

                <h1>Welcome to {click}</h1>
                <p>You clicked {count1} times</p>
                <button onClick={() => setCount1(count1 + 1)}>Click me</button>

                <p>My name is {name}</p>
                <button onClick={changeName}> Click me </button>

            </div>
        )
    }
    export default Practice
