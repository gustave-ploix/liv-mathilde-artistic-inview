import styles from './rowGallery.module.scss';

export default function RowGallery({children}) {
    return <div className={styles.rowLayout}>{children}</div>
};