import Image from 'next/image';

import FullPageGallery from '../../common/fullPageGallery';
import RowGallery from '../../common/rowGallery';
import TripleRow from '../../common/tripeRow';

import image01 from '../../../assets/images/visualResearch/1.jpg';
import image02 from '../../../assets/images/visualResearch/2.jpg';
import image03 from '../../../assets/images/visualResearch/3.jpeg';
import image04 from '../../../assets/images/visualResearch/4.jpeg';
import image05 from '../../../assets/images/visualResearch/5.jpg';

import image06 from '../../../assets/images/visualResearch/6.jpeg';
import image07 from '../../../assets/images/visualResearch/7.jpg';
import image08 from '../../../assets/images/visualResearch/8.jpg';
import image09 from '../../../assets/images/visualResearch/9.jpg';
import image10 from '../../../assets/images/visualResearch/10.jpg';
import image11 from '../../../assets/images/visualResearch/11.jpg';
import image12 from '../../../assets/images/visualResearch/12.jpg';
import image13 from '../../../assets/images/visualResearch/13.jpg';

import image14 from '../../../assets/images/visualResearch/14.jpg';
import image15 from '../../../assets/images/visualResearch/15.jpeg';
import image16 from '../../../assets/images/visualResearch/16.jpg';
import image17 from '../../../assets/images/visualResearch/17.jpeg';

import image18 from '../../../assets/images/visualResearch/18.jpeg';
import image19 from '../../../assets/images/visualResearch/19.jpg';
import image20 from '../../../assets/images/visualResearch/20.jpg';
import image21 from '../../../assets/images/visualResearch/21.jpg';
import image22 from '../../../assets/images/visualResearch/22.jpg';
import image23 from '../../../assets/images/visualResearch/23.jpg';
import image24 from '../../../assets/images/visualResearch/24.jpg';
import image25 from '../../../assets/images/visualResearch/25.jpg';
import image26 from '../../../assets/images/visualResearch/26.jpg';
import image27 from '../../../assets/images/visualResearch/27.jpg';
import image28 from '../../../assets/images/visualResearch/28.jpg';
import image29 from '../../../assets/images/visualResearch/29.jpg';
import image30 from '../../../assets/images/visualResearch/30.jpg';
import image31 from '../../../assets/images/visualResearch/31.jpg';
import image32 from '../../../assets/images/visualResearch/32.jpg';


import styles from './gallery.module.scss';

import GalleryLayout from './galleryLayout';

export default function Gallery() {
    return (
        <GalleryLayout>
            <RowGallery firstSrc={image01} firstAlt="visual research" secondSrc={image02} secondAlt="visual research" />
            <FullPageGallery propSrc={image03} propAlt="visual research" />
            <FullPageGallery propSrc={image04} propAlt="visual research" />
            <FullPageGallery propSrc={image05} propAlt="visual research" />
            <RowGallery firstSrc={image06} firstAlt="visual research" secondSrc={image07} secondAlt="visual research" />
            <RowGallery firstSrc={image08} firstAlt="visual research" secondSrc={image09} secondAlt="visual research" />
            <RowGallery firstSrc={image10} firstAlt="visual research" secondSrc={image11} secondAlt="visual research" />
            <RowGallery firstSrc={image12} firstAlt="visual research" secondSrc={image13} secondAlt="visual research" />

            <div className={styles.separator}></div>

            <RowGallery firstSrc={image14} firstAlt="visual research" secondSrc={image15} secondAlt="visual research" />
            <RowGallery firstSrc={image16} firstAlt="visual research" secondSrc={image17} secondAlt="visual research" />

            <div className={styles.secondTitle}>
                <div className={styles.line}></div>
                <p className={styles.title}>Recherches de couleurs, harmonies colorées</p>
            </div>

            <FullPageGallery propSrc={image18}/>
            <FullPageGallery propSrc={image19}/>
            <FullPageGallery propSrc={image20}/>
            <FullPageGallery propSrc={image21}/>
            <FullPageGallery propSrc={image22}/>
            <TripleRow firstSrc={image23} secondSrc={image24} thirdSrc={image25}/>
            <RowGallery firstSrc={image26} secondSrc={image27} firstAlt="visual research" secondAlt="visual research" />
            <FullPageGallery propSrc={image28} propAlt="visual research" />
            <RowGallery firstSrc={image29} secondSrc={image30} firstAlt="visual research" secondAlt="visual research" />
            <RowGallery firstSrc={image31} secondSrc={image32} firstAlt="visual research" secondAlt="visual research" />
                
        </GalleryLayout>
    )
}