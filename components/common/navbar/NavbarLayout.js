import styles from './navbar.module.scss';

export default function NavbarLayout({children}) {
    return <nav id='top' className={styles.navContainer}>{children}</nav>
}