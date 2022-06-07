import styles from "./titleContainer.module.scss";

export default function TitleContainer({children}) {
    return <div className={styles.titleContainer}>{children}</div>
}