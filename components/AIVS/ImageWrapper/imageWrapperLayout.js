import styles from './imageWrapper.module.scss';


export default function imageWrapperLayout({children}) {
    return <section className={styles.imageWrapperContainer}>{children}</section>
};