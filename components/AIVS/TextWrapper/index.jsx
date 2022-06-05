import styles from './textWrapper.module.scss';
import TextWrapperLayout from './textWrapperLayout';


export default function TextWrapper() {
    return (
        <TextWrapperLayout>

            <div className={styles.textContainer}>


                <p>
                    Artistic (in)view Studio est le nom donné au duo formé par <br/>
                    Liv Mathilde Méchin et <a target="_blank" href="https://www.virginieperocheauphotographe.studio/">Virginie Pérocheau</a>.
                </p>
                <p>
                    Développé à partir des intentions artistiques de Liv Mathilde,
                    le duo propose une vision photographique qui cherche à entraîner
                    des objets, accessoires, matières dans une histoire où tout semble
                    suspendu, presque sacré.
                </p>
                <p>
                    Ici, l’émotion s’invite pour augmenter la perception des
                    images et nous emmener dans une sensation esthétique
                    mêlant surprise et plaisir : des visuels libres, uniques et sensibles.
                    Liv Mathilde Méchin, directrice artistique et Virginie Pérocheau, photographe, travaillent depuis plus de 10 ans ensemble pour différentes marques.
                </p>
                <p>
                    Elles décident aujourd’hui de développer leur propre studio pour proposer
                    un univers destiné aux marques qui veulent donner à leur communication une réflexion visuelle forte.
                </p>

            </div>
        </TextWrapperLayout>
    )
}