import styles from './aboutSection.module.scss';
import AboutSectionLayout from './aboutSectionLayout';

export default function aboutSection() {


    return (
        <AboutSectionLayout>

            <div className={styles.left}>
                <h2>ABOUT</h2>
            </div>
            <div className={styles.right}>
                <div className={styles.presentationHeader}>
                    <h3>Observation - Intention - Réflexion Visuelle</h3>
                </div>
                <div>
                    <h4 className={styles.presentationTitle}><em>Artistic (in)view</em></h4>
                    <p className={styles.presentationText}>Donner un un point de vue artistique à l’intérieur d’un projet et créer des éléments d'inspirations libres et ouverts à celui ci.</p>
                    <p className={styles.presentationText}>Observer et chercher des iconographies transversales: art, design, mode, puis de créer des visuels comme autant d’éléments d'inspirations : dessins, maquettes, photos, montage, collage.</p>
                    <p className={styles.presentationText}>Réfléchir visuellement; choisir et associer ces images pour poser des histoires visuelles et susciter la réflexion autour.</p>
                    <p className={styles.presentationText}>Après des études à l’École Nationale Supérieure d’Arts de Cergy-Pontoise et un Master à l’IFM en création de mode, Liv Mathilde Méchin a poursuivit son travail en tant que styliste et plasticienne et entrepris un vaste travail de création pour la mode, le design et l'industrie textile.</p>
                    <p className={styles.presentationText}>Actuellement designer textile et directrice artistique freelance, elle travaille en partenariat avec différentes marques pour lesquelles elle conçoit leurs projets de collections, de développement ou/et de leur identité créative.</p>
                </div>
                <p className={styles.presentationEmail}><a href="mailto:artisticinview@gmail.com">artisticinview@gmail.com</a></p>
            </div>

        </AboutSectionLayout>
    );
};