import styles from './titleContainer.module.scss';

export default function TitleContainerLayout({children}) {
    return <div className={styles.titleContainer}>{children}</div>
}