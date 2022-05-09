import styles from './imageSection.module.scss';

export default function ImageSectionLayout({children}) {
    return <section className={styles.imageSectionContainer}>{children}</section>
}