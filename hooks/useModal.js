import {useState} from "react";

export default function useModal() {
    const [display, setDisplay] = useState(false);
    const toggle = () => setDisplay(!display)

    return { toggle, display }
}