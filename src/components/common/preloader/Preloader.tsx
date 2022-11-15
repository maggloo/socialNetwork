import React from 'react';
import preloader from "../../../assets/imgs/loader.svg";

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader} />
        </div>
    );
};

export default Preloader;