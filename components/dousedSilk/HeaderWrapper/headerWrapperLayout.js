import styles from './HeaderWrapper.module.scss';

export default function HeaderWrapperLayout({children}) {
    return <div className={styles.headerHerobanner}>{children}</div>
};