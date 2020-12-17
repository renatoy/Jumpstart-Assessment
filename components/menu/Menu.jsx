import React from 'react';
import styles from './menu.module.css';

const Menu = () => {

    return (
        <div className={styles.menu}>
            <div className={styles.moreIconContainer}>
                <div className={styles.threeDotsContainer}>
                    <div className={styles.moreIcon}></div>
                </div>
                <div className={styles.square}>
                </div>
                <div className={styles.dropdownContent}>
                    <div className={styles.linkContainer}>
                        <div className={styles.downloadIcon}></div>
                        <a className={styles.dropdownElement} href="/Download">Download</a>
                    </div>
                    <div className={styles.linkContainer}>
                        <div className={styles.printIcon}></div>
                        <a className={styles.dropdownElement} href="/Print">Print</a>
                    </div>
                    <div className={styles.linkContainer}>
                        <div className={styles.trashIcon}></div>
                        <a className={styles.deleteElement} href="/Delete">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;