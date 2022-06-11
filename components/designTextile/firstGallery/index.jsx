import TripleRow from '../../common/tripeRow';
import FullPageGallery from '../../common/fullPageGallery';
import RowGallery from '../../common/rowGallery';

import image01 from '../../../assets/images/degignTextile/01.jpg';
import image02 from '../../../assets/images/degignTextile/02.jpg';
import image03 from '../../../assets/images/degignTextile/03.jpg';
import image04 from '../../../assets/images/degignTextile/04.jpeg';
import image05 from '../../../assets/images/degignTextile/05.jpg';
import image06 from '../../../assets/images/degignTextile/06.jpg';
import image07 from '../../../assets/images/degignTextile/07.jpg';
import image08 from '../../../assets/images/degignTextile/08.jpg';
import image09 from '../../../assets/images/degignTextile/09.jpg';
import image10 from '../../../assets/images/degignTextile/10.jpg';
import image11 from '../../../assets/images/degignTextile/11.jpg';
import image12 from '../../../assets/images/degignTextile/12.jpg';
import image13 from '../../../assets/images/degignTextile/13.jpg';
import image14 from '../../../assets/images/degignTextile/14.jpg';

import styles from './firstGallery.module.scss';

import FirstGalleryLayout from './firstGalleryLayout';

export default function FirstGallery() {
    return (
        <FirstGalleryLayout>
            <div className={styles.galleryName}>
                <div className={styles.line}></div>
                <p>
                    VERILIN - Collection Guermantes, Palladio, Parc
                </p>
            </div>
            <TripleRow firstSrc={image01} secondSrc={image02} thirdSrc={image03} />
            <FullPageGallery propSrc={image04} />
            <RowGallery firstSrc={image05} secondSrc={image06} />
            <RowGallery firstSrc={image07} secondSrc={image08} />
            <RowGallery firstSrc={image09} secondSrc={image10} />
            <RowGallery firstSrc={image11} secondSrc={image12} />
        </FirstGalleryLayout>
    )
}