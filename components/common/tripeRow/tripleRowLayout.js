import styles from './tripleRow.module.scss';

export default function TripleRowLayout({children}) {
    return <div className={styles.tripleRowLayout}>{children}</div>
}