import React from 'react'
import styles from './logo.module.css'

const Logo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.circle}>
                <div className={styles.noteBook}></div>
            </div>
        </div>
    )
}

export default Logo;