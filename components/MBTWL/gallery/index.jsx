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
                src01={image01} alt01="blabla"
                src02={image02} alt02="blabla"
                src03={image03} alt03="blabla"
                src04={image04} alt04="blabla"
            />
            <FullPageGallery propSrc={image05} propAlt="blabla" />
            <Mosaic
                src01={image06} alt01="blabla"
                src02={image07} alt02="blabla"
                src03={image08} alt03="blabla"
                src04={image09} alt05="blabla"
            />
            <FullPageGallery propSrc={image10} propAlt="blabla" />
            <FullPageGallery propSrc={image11} propAlt="blabla" />

        </GalleryLayout>
    )
}