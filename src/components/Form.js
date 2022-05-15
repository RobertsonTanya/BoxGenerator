import React, { useState } from "react";
import styles from '../styles/form.module.css';

const Form = (props) => {
    const [newColor, setNewColor] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(newColor !== ''){
            props.liftColors(newColor);
            setNewColor('');
        }
    }
    function handleColorInput(color) {
        setNewColor(color);
    }

    return (
        <div className={styles.form}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="colorInput">Colors:</label>
                <input className={styles.colorInput} id="colorInput" onChange={(e) => handleColorInput(e.target.value)} value={newColor} />
                <button className={styles.btn} type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;