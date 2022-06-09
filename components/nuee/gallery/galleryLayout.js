import styles from './gallery.module.scss';

export default function GalleryLayout({children}) {
    return <section className={styles.galleryContainer}>{children}</section>
}