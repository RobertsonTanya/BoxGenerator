import React from "react";
import styles from '../styles/box.module.css';

const Box = (props) => {

    return (
        <div className={styles.box} style={{backgroundColor: props.color}}>
        </div>
    )
}

export default Box;