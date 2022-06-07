import HeaderWrapperLayout from "./headerWrapperLayout";
import styles from './headerWrapper.module.scss';
import Image from "next/image";

import image1 from "../../../assets/images/AIVS/artistic-in-view-nature-morte-111b.jpg";
import image2 from "../../../assets/images/AIVS/artistic-in-view-nature-morte-112.jpg";

export default function HeaderWrapper() {
    return (
        <HeaderWrapperLayout>
            <div className={styles.headerContainer}>
                <Image className={styles.images} src={image1} alt="image of a person in a dark background with glasses"
                />
                <Image className={styles.images} src={image2} alt="image of a person in a dark background with glasses"
                 />
            </div>
        </HeaderWrapperLayout>
    )
}