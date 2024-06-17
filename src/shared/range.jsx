import React, { useState } from 'react'

function Range() {
    const [rangeValue, setRangeValue] = useState(50);

    const handleChange = (event) => {
        setRangeValue(event.target.value);
    };


    return (
        <>
            <input type="range" min={0} max="100" value={rangeValue} className="range mt-4 range-primary" color='accent-content' onChange={handleChange} />
            <div className="w-full flex justify-between text-xs px-2">
                <span>$0</span>
                <span>$100</span>
            </div>
        </>
    )
}

export default Range