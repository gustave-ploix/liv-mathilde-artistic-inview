import image01 from '../../../assets/images/MBTWL/01.jpeg';
import image02 from '../../../assets/images/MBTWL/02.jpg';
import image03 from '../../../assets/images/MBTWL/03.jpg';
import image04 from '../../../assets/images/MBTWL/04.jpg';
import image05 from '../../../assets/images/MBTWL/05.jpg';
import image06 from '../../../assets/images/MBTWL/06.jpeg';
import image07 from '../../../assets/images/MBTWL/07.jpg';
import image08 from '../../../assets/images/MBTWL/08.jpg';
import image09 from '../../../assets/images/MBTWL/09.jpg';
import image10 from '../../../assets/images/MBTWL/10.jpeg';
import image11 from '../../../assets/images/MBTWL/11.jpg';



import GalleryLayout from "./galleryLayout";

import Mosaic from "../../common/mosaic";
import FullPageGallery from '../../common/fullPageGallery';

import styles from './gallery.module.scss';

export default function Gallery() {
    return (
        <GalleryLayout>
            <Mosaic
                src01={image01} alt01="broken plate standing up."
                src02={image02} alt02="broken glasses in a dark background."
                src03={image03} alt03="broken lid in a light background."
                src04={image04} alt04="broken ballon in a light background."
            />
            <FullPageGallery propSrc={image05} propAlt="ripped jacket in a light background." />
            <Mosaic
                src01={image06} alt01="installation with a broken chair and a black coat."
                src02={image07} alt02="broken chair installed a certain way."
                src03={image08} alt03="other installation of this same chair."
                src04={image09} alt04="black jacket creating a shadow."
            />
            <FullPageGallery propSrc={image10} propAlt="ripped drape disposed hanging on the wall." />
            <FullPageGallery propSrc={image11} propAlt="dead apple in a really dark background." />

        </GalleryLayout>
    )
}