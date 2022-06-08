import styles from './gallery.module.scss';

export default function GalleryLayout({children}) {
    return <div className={styles.galleryContainer}>{children}</div>
}