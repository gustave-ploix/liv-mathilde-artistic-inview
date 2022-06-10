import styles from './secondTitle.module.scss';

export default function SecondTitleLayout({children}) {
    return <div className={styles.secondTitleContainer}>{children}</div>
}