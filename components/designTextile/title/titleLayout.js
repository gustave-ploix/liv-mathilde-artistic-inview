import styles from './title.module.scss';

export default function TitleLayout({children}) {
    return <section className={styles.titleWrapper}>{children}</section>
}