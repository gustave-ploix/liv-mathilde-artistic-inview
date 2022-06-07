import TitleContainerLayout from './titleContainerLayout';

import styles from './titleContainer.module.scss';


export default function TitleContainer() {
    return (
        <TitleContainerLayout>
            <h1 className={styles.title}>
                DOUSED SILK ON STOOL
            </h1>
            <p className={styles.separator}> - </p>
            <h2 className={styles.italicText}>tissage photographique</h2>
        </TitleContainerLayout>
    )
}