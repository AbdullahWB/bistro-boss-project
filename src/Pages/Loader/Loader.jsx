import React from 'react';
import loading from '../../assets/others/loader3.gif'

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
           <img src={loading} alt="" />
        </div>
    );
};

export default Loader;