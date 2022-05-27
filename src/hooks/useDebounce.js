import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            // clear nếu useEffect được gọi lại
            clearInterval(handle);
            // console.log('clearInterval', debouncedValue);
        };
    }, [value]);
    // console.log(debouncedValue);

    return debouncedValue;
}

export default useDebounce;
