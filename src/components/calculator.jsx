import { useState } from 'react';
import { useEffect } from 'react';


function Calculator() {

    const [num, setNum] = useState("")
    const [result, setResult] = useState([0, false])
    const [operator, setOperator] = useState("")

    const [toggleButton, setToggleButton] = useState("circle-one")
    const [theme, setTheme] = useState("theme-one")



    const handleOperator = (e) => {


        if (num != "" && operator == "+" && result[1] == false) {
            setResult([result[0] + +num, false])
        } else if (num != "" && operator == "*" && result[1] == false) {
            setResult([result[0] * +num, false])
        } else if (num != "" && operator == "/" && result[1] == false) {
            setResult([result[0] / +num, false])
        } else if (num != "" && operator == "-" && result[1] == false) {
            setResult([result[0] - +num, false])
        } else if (num != "" && result[1] == true) {
            setResult([result[0] - result[0] + +num, false])

        } else if (result[0] == 0 && result[1] == false) {
            setResult([result[0] + +num, false])
        }

        switch (e.target.name) {
            case "plus":

                setOperator("+")

                setNum("")

                break

            case "minus":



                setOperator("-")
                setNum("")

                break

            case "multiply":


                setOperator("*")
                setNum("")

                break

            case "divide":


                setOperator("/")
                setNum("")
        }

    }

    const equals = () => {

        if (operator == "+") {
            setNum("")
            setResult([result[0] + +num, true])


        } else if (operator == "-") {
            setNum("")
            setResult([result[0] - +num, true])

        } else if (operator == "*") {
            setNum("")
            setResult([result[0] * +num, true])
        }

        else if (operator == "/") {
            setNum("")
            setResult([result[0] / +num, true])
        }

    }

    const handleDelete = () => {

        setNum(prevelement => prevelement.slice(0, prevelement.length - 1))
        
    }


    const numberformatted = (


        num.includes('.') ? new Intl.NumberFormat().format(num.split(".")[0]) + "." + num.split(".")[1] : new Intl.NumberFormat().format(num)

    )

    const resultformatted = (
        result[0].toString().includes('.') ? result[0] : new Intl.NumberFormat().format(result[0])

    )


    const handleToggle = () => {

        if (toggleButton == "circle-one") {
            setToggleButton("circle-two")
            setTheme("theme-two")
        } else if (toggleButton == "circle-two") {
            setToggleButton("circle-three")  
            setTheme("theme-three")
        } else {
            setToggleButton("circle-one")
            setTheme("theme-one")

        }
    }


    useEffect(() => {
            document.body.className = theme    

    }, [toggleButton])


    return (
        <div className='wrapper'>

            <div className='flex firstrow'>
                <div>calc</div>
                
                <div className='theme smallerfont'>THEME</div>
                <div>
                    <ul className='flex smallerfont'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    
                    
                    <div onClick={handleToggle} className='toggle'><div  className={toggleButton}></div></div>
                </div>

                
            </div>

            <input className='display' type="text" readOnly="readonly" name="number"  value={num ? numberformatted : resultformatted} onChange={(e) => setNum(+e.target.value)} ></input>


            <div className='keypad'>

            <div className='keypadrow'>
                <button value={7} onClick={() => setNum(prevelement => prevelement + 7)}>7</button>
                <button value={8} onClick={() => setNum(prevelement => prevelement + 8)}>8</button>
                <button value={9} onClick={() => setNum(prevelement => prevelement + 9)}>9</button>
                <button className="resetdel delfont" onClick={handleDelete}>DEL</button>
            </div>

            <div className='keypadrow'>
                <button value={4} onClick={() => setNum(prevelement => prevelement + 4)}>4</button>
                <button value={5} onClick={() => setNum(prevelement => prevelement + 5)}>5</button>
                <button value={6} onClick={() => setNum(prevelement => prevelement + 6)}>6</button>
                <button name="plus" onClick={(e) => handleOperator(e)}>+</button>
            </div>

            <div className='keypadrow'>
                <button value={1} onClick={() => setNum(prevelement => prevelement + 1)}>1</button>
                <button value={2} onClick={() => setNum(prevelement => prevelement + 2)}>2</button>
                <button value={3} onClick={() => setNum(prevelement => prevelement + 3)}>3</button>
                <button name="minus" onClick={(e) => handleOperator(e)}>-</button>
            </div>

            <div className='keypadrow'>
                <button onClick={() => setNum(prevelement => prevelement + ".")}>.</button>
                <button value={0} onClick={() => setNum(prevelement => prevelement + 0)}>0</button>
                <button name="divide" onClick={(e) => handleOperator(e)}>/</button>
                <button name="multiply" onClick={(e) => handleOperator(e)}>x</button>
            </div>

            <div className='keypadrow'>
                <button className='bottomrow resetdel' onClick={() => [setNum(""), setResult([0, false]), setOperator("")]}>RESET</button>
                <button className='bottomrow equalsigncolor resetdel' onClick={equals}>=</button>
            </div>

            </div>
        </ div>
    )
}

export default Calculator;