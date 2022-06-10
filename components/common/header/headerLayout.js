import styles from './header.module.scss';

export default function HeaderLayout({children}) {
    return <section className={styles.headerLayout}>{children}</section>
}