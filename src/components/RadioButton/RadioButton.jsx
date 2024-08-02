import "./RadioButton.css";
import React, { useEffect, useRef } from 'react';
import { FaCheck } from "react-icons/fa";

function RadioButton({ title, color, selected, setSelected }) {

    const radioElement = useRef(null)

    const clickHandler = (title) => {
        setSelected(title)
    }

    useEffect(() => {
        if (selected === title) {
            radioElement.current.classList.add("active")
        } else {
            radioElement.current.classList.remove("active")
        }
    }, [selected])

    return (
        <div className="radio-button-container" ref={radioElement} style={{ '--radio-element-color': color }} onClick={() => clickHandler(title)}>
            <div className="radio-circle">
                {selected === title && <FaCheck className="icon" />}
            </div>
            <h4>{title}</h4>
        </div>
    )
}

export default RadioButton