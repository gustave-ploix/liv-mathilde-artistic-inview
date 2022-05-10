import styles from './imageWrapper.module.scss';


export default function imageWrapperLayout({children, secondLayerClassname}) {
    return <section className={secondLayerClassname}>{children}</section>
};