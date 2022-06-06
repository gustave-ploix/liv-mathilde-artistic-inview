import styles from './headerWrapper.module.scss';

export default function headerWrapperLayout({children}) {
    return <div className={styles.headerWrapper}>{children}</div>
}