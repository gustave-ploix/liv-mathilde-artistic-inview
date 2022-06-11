import styles from "./secondGallery.module.scss";

export default function SecondGalleryLayout({children}) {
    return <section className={styles.secondGalleryLayout}>{children}</section>
}