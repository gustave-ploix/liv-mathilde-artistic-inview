import styles from './firstGallery.module.scss';

export default function FirstGalleryLayout({children}) {
    return <section className={styles.firstGalleryLayout}>{children}</section>
}