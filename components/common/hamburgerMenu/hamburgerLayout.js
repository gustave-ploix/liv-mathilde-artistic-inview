import styles from './hamburger.module.scss';

export default function HamburgerLayout({children}) {
    return <nav className={styles.navbarHamburger}>{children}</nav>
}