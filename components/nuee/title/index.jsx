import Image from 'next/image';
import logoNuee from '../../../assets/images/nuee/logoNuee.png';

import styles from './title.module.scss';

import TitleLayout from './titleLayout';

export default function Title() {
    return (
        <TitleLayout>
            <div className={styles.logoContainer}>
            <Image src={logoNuee} alt="Logo Nuée, made by Liv Mathilde Mechin" />
            </div>

            <div className={styles.descriptionTitle}>
                <p>... est la concrétisation d&apos;une collaboration de plusieurs années entre <a target="_blank" rel='noopener noreferrer' href="https://cometouvay.wixsite.com/cometouvay">Côme Touvay</a>,
                    designer textile spécialisé en tissage et Liv Mathilde Méchin styliste plasticienne.
                    Une rencontre de deux auteurs et l&apos;excellence d&apos;un fabricant belge, <a target="_blank" rel='noopener noreferrer' href="https://www.verilin.be/">Verilin</a>.</p>
                <p>
                    Porté par une intention artistique forte, entre design, art et poésie, Nuée a été créé pour donner
                    une nouvelle perception d&apos;espace et de couleurs à travers une ligne de textile maison.
                </p>
                <p>
                    C&apos;est une recherche d&apos;infini jeux de tissage, de couleurs et de matières.
                </p>
                <p>
                    Une alchimie silencieuse: Fil à fil la couleur devient blanche, le lin devient coton, progressivement réversible l&apos;endroit devient l&apos;envers
                    Les tissus s&apos;appelle: Shadow, Ombre 33, Drap d&apos;été, Drap d&apos;hiver, Voile de nuit,
                </p>
            </div>
            <p className={styles.titleFooter}><span>&#123;</span> Direction Artistique & Creative, Design Textile, Photo Styling <span>&#125;</span> </p>
        </TitleLayout>
    )
}