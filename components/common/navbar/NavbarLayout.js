import styles from './navbar.module.scss';

export default function NavbarLayout({children}) {
    return <nav className={styles.navContainer}>{children}</nav>
}