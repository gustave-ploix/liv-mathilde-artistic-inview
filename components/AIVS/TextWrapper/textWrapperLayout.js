import styles from  "./textWrapper.module.scss";

export default function TextWrapperLayout({children}) {
    return <div className={styles.textWrapper}>{children}</div>
}