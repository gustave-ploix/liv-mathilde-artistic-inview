import styles from './header.module.scss';

export default function HeaderLayout({children}) {
    return <section className={styles.headerContainer}>{children}</section>
}