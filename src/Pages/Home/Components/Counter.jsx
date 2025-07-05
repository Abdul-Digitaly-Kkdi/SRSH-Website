import { div } from 'framer-motion/client';
import React from 'react';
import CountUp from 'react-countup';
import Marquee from 'react-fast-marquee';

const counters = [
    { end: 500, label: 'Colorectal Cancer surgeries' },
    { end: 750, label: '⁠Stomach and Esophageal Cancer surgeries' },
    { end: 1000, label: 'Pancreatic Cancer surgeries' },
    { end: 250, label: 'Liver Surgeries' },
    { end: 7500, label: 'Laparoscopic surgeries' },
    { end: 50, label: 'Weight Loss Surgeries' },
    { end: 5000, label: 'Gall Bladder Surgeries' },
];

const SurgeryStats = () => {
    return (
        <div className="bg-rose-400 text-white py-5">
            <div className="w-full md:w-8/12 mx-auto">
                <Marquee>
                    {counters.map((data, id) => (
                        <div key={id} className='px-5 text-center'>
                            <div className='text-2xl'>
                                {data.end} +
                            </div>
                            <div className='text-black'>
                                {data.label}
                            </div>
                        </div>
                    ))}
                </Marquee>

            </div>
        </div>
    );
};

export default SurgeryStats;
