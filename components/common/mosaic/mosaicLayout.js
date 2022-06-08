import styles from './mosaic.module.scss';

export default function MosaicLayout({children}) {
    return <div className={styles.mosaicContainer}>{children}</div>
};