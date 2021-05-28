import React, {useEffect, useRef, useState} from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
    // console.log(options);
    // console.log(visibilityRef.current);
    const [isIntersecting, setIntersecting] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export default useOnScreen;