import CreditsLayout from './creditsLayout';

import styles from './credits.module.scss';

export default function CreditsComp() {
    return (
        <CreditsLayout>
            <div className={styles.top}>
                <h1>Credits PHOTOS</h1>
                <p>- <a className={styles.outterLink} href="verilin.be">VERILIN</a>: Guermantes, Parc, Normandy, Bloc, Palladio</p>
                <p>- NUÉE</p>
                <p>©<strong>Virginie Perocheau</strong> - <a className={styles.outterLink} target="_blank" href="virginieperocheau.com">virginieperocheau.com</a> </p>
                <p><strong>styling: Liv Mathilde Méchin</strong></p>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.bottom}>
                <p><a className={styles.outterLink} href="verlin.be">VERILIN</a> : Mineralis</p>
                <p>©<a className={styles.outterLink} href="https://shanwong.com/">Piet Albert Goethals</a> </p>
                <p><strong>styling</strong>: <a className={styles.outterLink} target="_blank" href="jessyvandurme.com">jessyvandurme.com</a></p>
            </div>
        </CreditsLayout>
    )
}