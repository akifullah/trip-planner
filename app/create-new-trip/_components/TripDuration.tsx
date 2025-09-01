import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'

const TripDuration = ({ onSelectOption }: any) => {
    const [count, setCount] = useState<any>(5);
    useEffect(() => {
        onSelectOption("I want to travel for " + count + " days");
    }, [count]);
    return (
        <div>
            <h3>HOW MANY DAYS ARE YOU GOING TO TRAVEL?</h3>
            <div className="flex gap-2">
                <Button size={"sm"} onClick={() => setCount(count + 1)}>Increment</Button>
                <p>Count: {count}</p>
                <Button size={"sm"} onClick={() => setCount(count - 1)}>Decrement</Button>
            </div>
        </div>
    )
}

export default TripDuration