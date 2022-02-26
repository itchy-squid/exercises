import { useState } from "react"
import { CountDowner } from "./CountDowner"

export const CountDownPage = () => {
    const [date, setDate] = useState('');

    const handleRawDateInput = (e) => {
        setDate(e.target.value);
    }

    return <>
        <p>Count down the days until a date</p>
        <form>
            Date: <input type='text' value={date} onChange={handleRawDateInput} />
        </form>
        <CountDowner date={date} />
    </>
}