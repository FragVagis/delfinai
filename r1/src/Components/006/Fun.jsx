import { useState } from "react";

function Fun({spalva, setCount}) {


    const [bg, setBg] = useState('lime');


    const changeB = () => {
        //setBg('crimson');
        setBg(b => b === 'lime' ? 'crimson' : 'lime')
        console.log(bg)
    }

    const addOne = () => {

        // setCount(Count + 1);
        // setCount(Count + 1);
        // setCount(Count + 1);

        setCount(c => c + 1);

    }



    return (
        <>
        <h2 style={{
            color: spalva,
            backgroundColor: bg
        }}>FUN</h2>
        <button onClick={changeB}>Do Red</button>
        <button onClick={addOne}>1+</button>
</>
    );
};

export default Fun
