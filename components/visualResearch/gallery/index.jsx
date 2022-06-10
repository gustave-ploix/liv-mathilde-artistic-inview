import Image from 'next/image';

import FullPageGallery from '../../common/fullPageGallery';
import RowGallery from '../../common/rowGallery';

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

        </GalleryLayout>
    )
}