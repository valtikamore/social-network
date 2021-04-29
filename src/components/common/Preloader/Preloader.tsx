import preloader from "../../../assets/imagies/Bean Eater-1.2s-197px.svg";
import React, {FC} from "react";
type PreloaderPropsType = {

}

export const Preloader:FC<PreloaderPropsType> = () => {
    return (
        <img style={{position: 'absolute', top: '40%', left: '50%'}}
             src={preloader} alt="Packman"
        />
    )
}