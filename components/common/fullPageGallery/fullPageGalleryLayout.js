import styles from "./fullPageGallery.module.scss";

export default function FullPageGalleryLayout({children}) {
    return <div className={styles.fullPageImage}>{children}</div>
}