import React from 'react'
import styles from './button.module.css';

const Button = () => {
    return (
        <>
            <button className={styles.button}>
                <p className={styles.buttonText}>View document</p>
            </button>
        </>
    )
}

export default Button;