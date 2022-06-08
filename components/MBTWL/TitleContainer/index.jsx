import styles from './titleContainer.module.scss';

import TitleContainerLayout from './titleContainerLayout';

export default function TitleContainer() {
    return (
        <TitleContainerLayout>
            <h1 className={styles.title}>
                <span>My Broken Things</span>
                <span>with Love</span>
                <span>LivM</span>
            </h1>
        </TitleContainerLayout>
    )
}