import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import './carousel.css'; // For custom overlay styling (see below)
import slide1 from '../../../assets/slide/slide.jpeg'
import slide2 from '../../../assets/slide/slide2.jpeg'

const slides = [
    {
        title: 'When Every Second Matters, We’re Already There.',
        description:
            'Round-the-clock emergency care that’s swift, specialized, and seamless. Equipped with cutting-edge technology and led by elite trauma teams—your life is our first priority.',
        image: slide1,
    },
    {
        title: 'Where Precision Meets Compassion in Cancer Care.',
        description:
            'From early detection to advanced oncology treatments, experience a new standard in cancer care—where state-of-the-art therapies meet world-renowned expertise, and every patient is treated like the only one.',
        image: slide2,
    },
    {
        title: 'A Moving ICU, Just Minutes Away.',
        description:
            'Our advanced life-support ambulances are more than just vehicles—they’re mobile critical care units, ensuring expert medical attention starts from the moment we reach you.',
        image: slide1,
    },
    {
        title: 'Because Every Life Deserves a Fighting Chance.',
        description:
            'Delta Cancer Foundation stands as our promise to society—offering free, high-quality cancer treatment for the underserved. Compassion is not a service. It’s a responsibility.',
        image: slide1,
    },
    {
        title: 'A Visionary in Medicine. A Name Patients Trust.',
        description:
            'Dr. Vijay Anand is more than a celebrated oncologist—he’s a pioneer in compassionate, patient-first cancer care. With decades of global experience and unmatched precision, his name is synonymous with healing.',
        image: slide1,
    },
    {
        title: 'Where Luxury Meets Lifesaving.',
        description:
            'An oasis of world-class medicine. From plush patient suites to internationally acclaimed specialists, our hospital redefines healthcare—offering an experience that heals the body and respects the soul.',
        image: slide1,
    },
];

const LandingCarousel = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade, Navigation]}
                effect="fade"
                loop
                navigation={false}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="w-full h-full bg-cover bg-right md:bg-center relative"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-start px-6 md:px-20 text-white text-left"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-3xl">
                                    {slide.title}
                                </h2>
                                <p className="text-base md:text-lg max-w-2xl">{slide.description}</p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LandingCarousel;
