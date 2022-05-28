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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
