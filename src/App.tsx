import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Buttons } from "./Buttons";
import { Counter } from "./Counter";

const App = () => {


    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)

    const [maxValueForCount, setMaxValueForCount] = useState(maxValue)
    const [minValueForCount, setMinValueForCount] = useState(minValue)

    const [count, setCount] = useState(minValue)

    const countClassAdd = count === maxValue ? true : false
    const countSet= minValue>maxValue || minValue<0 || minValue===maxValue ? true : false

    useEffect(() => {
        const dataForCount = localStorage.getItem('dataForCount')
        if (dataForCount) {
            const { count,minValueForCount, maxValueForCount} = JSON.parse(dataForCount)
            setCount(count)
            setMinValueForCount(minValueForCount)
            setMaxValueForCount(maxValueForCount)
        }
        else{
            setCount(count)
            setMinValueForCount(minValue)
            setMaxValueForCount(maxValue)

        }
    }, [])

    useEffect(() => {
        const dataForCount = {
            count,
            minValueForCount,
            maxValueForCount,
        }
        localStorage.setItem('dataForCount', JSON.stringify(dataForCount))
    }, [count,minValueForCount, maxValueForCount ])

    const AddCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const ResetCount = () => {
        setCount(minValue)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)

    }

    const setLimitForCount = () => {
        setCount(minValue)
        setMinValueForCount(minValue)
        setMaxValueForCount(maxValue)
       
    }

    return (

        <>
            <div className="container">
                <div>max value: <input type="number" value={maxValue} onChange={onChangeMaxValue} /> </div>
                <div>start value: <input type="number" value={minValue} onChange={onChangeMinValue} /> </div>
                <button disabled={countSet} onClick={setLimitForCount}>set</button>
            </div>
            <div className="container">
                <div><Counter count={count} minValue={minValueForCount} maxValue={maxValueForCount}/></div>
                <Buttons
                    AddCount={AddCount}
                    ResetCount={ResetCount}
                    countClassAdd={countClassAdd}
                />
            </div>

        </>

    );
}

export default App;
