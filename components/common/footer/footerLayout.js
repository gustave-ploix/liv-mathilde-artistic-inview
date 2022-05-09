import styles from './footer.module.scss';

export default function FooterLayout({children}) {
    return <footer className={styles.footerContainer}>{children}</footer>
}