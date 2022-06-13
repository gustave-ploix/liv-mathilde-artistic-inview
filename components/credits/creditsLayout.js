import styles from './credits.module.scss';

export default function CreditsLayout({children}) {
    return <section className={styles.creditsContainer}>{children}</section>
}