import styles from './aboutSection.module.scss';

export default function AboutSectionLayout({children}) {
    return <section className={styles.aboutSection}>{children}</section>
}