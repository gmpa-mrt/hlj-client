import {useRef, useState, useEffect} from "react";

export default function useVisible(options) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entries]) => {
            setVisible(entries.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect()
    }, [ref, options]);

    return [ref, visible];
}