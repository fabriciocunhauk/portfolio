import {  useEffect, useState } from "react";

  export const useScrollAction = (activeHeight) => {
    const [activeOnScroll, setActiveOnScroll] = useState(false);
    
    useEffect(() => {
        const updateScrollDirection = () => {
            const currentScrollYPosition = window.scrollY;
        if (currentScrollYPosition >= activeHeight) {
            setActiveOnScroll(true);
        } else {
            setActiveOnScroll(false);
        }
    };

    window.addEventListener("scroll", updateScrollDirection);

  }, [activeHeight]);

        return activeOnScroll;
    };
