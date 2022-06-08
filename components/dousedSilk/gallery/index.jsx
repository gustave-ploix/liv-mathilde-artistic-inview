import Image from 'next/image';

import RowGallery from "../../common/rowGallery";
import FullPageGallery from "../../common/fullPageGallery";

import image01 from "../../../assets/images/doused-silk/01.jpg"
import image02 from "../../../assets/images/doused-silk/02.jpg"
import image03 from "../../../assets/images/doused-silk/03.jpg"
import image04 from "../../../assets/images/doused-silk/04.jpg"
import image05 from "../../../assets/images/doused-silk/05.jpg"

import GalleryLayout from './galleryLayout';

import styles from './gallery.module.scss';

export default function Gallery() {
    return (
        <GalleryLayout>
            <RowGallery firstSrc={image01} firstAlt="Image of a drape with a photo on it." secondSrc={image02} secondAlt="Image of a drape with a photo on it." />
            <FullPageGallery propSrc={image03} propAlt="details of the drape with the photo on it."/>
            <RowGallery firstSrc={image04} secondSrc={image05} firstAlt="full view of the installation." secondAlt="other image for the drape." />
        </GalleryLayout>
    )
}