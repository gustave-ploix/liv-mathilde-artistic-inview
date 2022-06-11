import styles from './title.module.scss';

import TitleLayout from './titleLayout';

export default function Title() {
    return (
        <TitleLayout>
            <h1>DESIGN TEXTILE</h1>
            <p className={styles.plainText}>Linge de lit, Rideaux, Plaids, Nappe...  Des jacquards tisses en lin mélangés avec du coton d&apos;Égypte, Mohair, Cashmere</p>
            <p className={styles.titleFooter}>
                <span>&#123;</span>
                Direction créative, Dessins textile, Stylisme de collection,
                Recherche couleurs et matières, Photo Styling
                <span>&#125;</span>
            </p>
        </TitleLayout>
    )
}