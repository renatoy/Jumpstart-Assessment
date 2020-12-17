import Menu from '../../menu/Menu';
import Logo from '../../logo/Logo';
import Button from '../../button/Button';
import styles from '../cards.module.css';

const HoveredCard = () => {
    return (
        <>
            <article className={styles.article}>
                <h2 className={styles.title}>Hover State</h2>
                <div className={styles.card}>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                    <div className={styles.logo}><Logo /></div>
                    <h3 className={styles.subtitle}>Corporate Bylaws</h3>
                    <p className={styles.text}>An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors</p>
                    <div className={styles.cardButton}>
                        <Button />
                    </div>
                </div>
                <div className={styles.rectangle}></div>
            </article>
        </>
    )
}

export default HoveredCard;