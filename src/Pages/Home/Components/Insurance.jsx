import React from 'react';
import Marquee from 'react-fast-marquee';

// Import all insurance images
import insurance1 from '../../../assets/Insurance/1.png'
import insurance2 from '../../../assets/Insurance/2.png'
import insurance3 from '../../../assets/Insurance/3.png'
import insurance4 from '../../../assets/Insurance/4.png'
import insurance5 from '../../../assets/Insurance/5.png'
import insurance6 from '../../../assets/Insurance/6.png'
import insurance7 from '../../../assets/Insurance/7.png'
import insurance8 from '../../../assets/Insurance/8.png'
import insurance9 from '../../../assets/Insurance/9.png'
import insurance10 from '../../../assets/Insurance/10.png'
import insurance11 from '../../../assets/Insurance/11.png'
import insurance12 from '../../../assets/Insurance/12.png'
import insurance13 from '../../../assets/Insurance/13.png'
import insurance14 from '../../../assets/Insurance/14.png'
import insurance15 from '../../../assets/Insurance/15.png'
import insurance16 from '../../../assets/Insurance/16.png'
import insurance17 from '../../../assets/Insurance/17.jpeg'
import insurance18 from '../../../assets/Insurance/18.png'
import insurance19 from '../../../assets/Insurance/19.png'
import insurance20 from '../../../assets/Insurance/20.png'
import insurance21 from '../../../assets/Insurance/21.png'
import insurance22 from '../../../assets/Insurance/22.png'
import insurance23 from '../../../assets/Insurance/23.png'
import insurance24 from '../../../assets/Insurance/24.png'
import insurance25 from '../../../assets/Insurance/25.png'
import insurance26 from '../../../assets/Insurance/26.png'
import insurance27 from '../../../assets/Insurance/27.png'
import insurance28 from '../../../assets/Insurance/28.jpeg'
import insurance29 from '../../../assets/Insurance/29.jpeg'
import insurance30 from '../../../assets/Insurance/30.png'
import insurance31 from '../../../assets/Insurance/31.png'
import insurance32 from '../../../assets/Insurance/32.png'
import insurance33 from '../../../assets/Insurance/33.png'

// Combine all images into array
const images = [
    insurance1, insurance2, insurance3, insurance4, insurance5, insurance6,
    insurance7, insurance8, insurance9, insurance10, insurance11, insurance12,
    insurance13, insurance14, insurance15, insurance16, insurance17, insurance18,
    insurance19, insurance20, insurance21, insurance22, insurance23, insurance24,
    insurance25, insurance26, insurance27, insurance28, insurance29, insurance30,
    insurance31, insurance32, insurance33
];

const Insurance = () => {
    return (
        <>
            <h1 className='text-center text-3xl md:text-4xl font-semibold text-red-700 py-5 md:hidden'>Our Insurance</h1>
            <div className="w-full bg-rose-100 py-4 relative">

                <div className='hidden md:flex absolute top-0 left-0 z-10  items-center font-semibold px-2 text-3xl bg-rose-400  h-28 text-white'>
                    Our Insurance
                </div>

                <Marquee pauseOnHover={true} speed={40}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="mx-4 flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={img}
                                alt={`insurance-${index + 1}`}
                                className="h-20 w-auto object-contain  hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default Insurance;
