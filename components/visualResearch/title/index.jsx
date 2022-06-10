import styles from './title.module.scss';

import TitleLayout from './titleLayout';

export default function Title() {
    return (
        <TitleLayout>
            <h1>VISUAL RESEARCH</h1>
            <div className={styles.plainTextContainer}>
                <p className={styles.plainText}>
                    Dessins, maquettes, pliages, assemblages de matières, associations colorées,
                    décompositions, superpositions, jouer et déjouer les contours d&apos;une forme..... <br />
                    des éléments librement composés pour suggérer des histoires
                </p>
                <p className={styles.plainText}>
                    Rechercher visuellement, c&apos;est créer des outils à penser
                    et offrir des supports pour concevoir et créer une cohérence artistique:
                </p>
                <p className={styles.plainText}>
                    cahiers de tendance, base iconographique, collection et
                    dessin textile, dossiers de style, gammes de couleurs,
                </p>
            </div>
            <p className={styles.titleFooter}><span>&#123;</span> Intention Artistique, Dessin, Recherche Visuelle <span>&#125;</span> </p>
        </TitleLayout>
    )
} 