import styles from './title.module.scss';

export default function Title({children}) {
    return <section className={styles.titleWrapper}>{children}</section>
}