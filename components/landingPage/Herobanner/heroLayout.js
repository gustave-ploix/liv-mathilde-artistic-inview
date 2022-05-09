import styles from './herobanner.module.scss';

export default function HeroLayout({children}) {
    return (
        <section className={styles.heroLayout}>{children}</section>
    )
}