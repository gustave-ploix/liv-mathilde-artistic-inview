import styles from './secondTitle.module.scss';

import SecondTitleLayout from './secondTitleLayout';

export default function SecondTitle() {
    return (
        <SecondTitleLayout>
            <div className={styles.separator}></div>
            <p>CATALOGUE NUÉE</p>
        </SecondTitleLayout>
    )
}