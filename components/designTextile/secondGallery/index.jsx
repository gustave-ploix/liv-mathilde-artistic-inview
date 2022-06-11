import RowGallery from '../../common/rowGallery';
import FullPageGallery from '../../common/fullPageGallery';

import image15 from '../../../assets/images/degignTextile/15.jpg';
import image16 from '../../../assets/images/degignTextile/16.jpg';
import image17 from '../../../assets/images/degignTextile/17.jpg';
import image18 from '../../../assets/images/degignTextile/18.jpg';
import image19 from '../../../assets/images/degignTextile/19.jpg';
import image20 from '../../../assets/images/degignTextile/20.jpeg';
import image21 from '../../../assets/images/degignTextile/21.jpg';
import image22 from '../../../assets/images/degignTextile/22.jpg';
import image23 from '../../../assets/images/degignTextile/23.jpg';
import image24 from '../../../assets/images/degignTextile/24.jpg';


import styles from './secondGallery.module.scss';

import SecondGalleryLayout from './secondGalleryLayout';

export default function SecondGallery() {
    return (
        <SecondGalleryLayout>
            <div className={styles.galleryName}>
                <div className={styles.line}></div>
                <p>
                    VERILIN - Collections: Polka, Normandy, Bloc
                </p>
            </div>
            <FullPageGallery propSrc={image15} />
            <RowGallery  firstSrc={image16} secondSrc={image17}/>
            <RowGallery  firstSrc={image18} secondSrc={image19}/>
            <FullPageGallery propSrc={image20} />
            <RowGallery  firstSrc={image21} secondSrc={image22}/>
            <RowGallery  firstSrc={image23} secondSrc={image24}/>
        </SecondGalleryLayout>
    )
}