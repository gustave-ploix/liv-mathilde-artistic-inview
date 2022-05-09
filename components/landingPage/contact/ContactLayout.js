import styles from './contact.module.scss';

export default function FooterLayout({children}) {
    return <section className={styles.contactFooter}>{children}</section>
}