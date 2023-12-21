import banner2 from '../../assets/home/chef-service.png'
import React from 'react';

const Banner2 = () => {
    return (
        <div className='w-5/6 mx-auto text-center my-10 relative '>
            <img src={banner2} alt=''/>
            <div className='bg-white md:absolute top-5 bottom-5 md:p-8 md:m-16'>
                <h2 className='uppercase font-bold my-4 '>Bistro Boss</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>
    );
};

export default Banner2;