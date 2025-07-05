import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = [
    {
        rating: 4.9,
        text: 'He is one of the genuine gastroenterologist in Trichy. Very professional & ethical doctor. I would say fellow Trichiites should make use of his vast experience & excellent service in medical & surgical gastro treatment. For his modesty and honesty, may God bless him with great health and happiness. He gives 100% attention to your complaints.',
        name: 'Kavi',
        avatar: 'https://pagedone.io/asset/uploads/1696229969.png'
    },
    {
        rating: 4.9,
        text: 'Very polite and excellent patient care. My friend underwent pancreatic cancer surgery here. Dr.Vijayanand one of the leading gastrosurgeons in trichy. Properly explained about the procedure and took great care. Thanks to Sri Ramakrishna specialty hospital.',
        name: 'Curious Scalpel',
        avatar: 'https://pagedone.io/asset/uploads/1696229994.png'
    },
    {
        rating: 4.9,
        text: 'One of the best doctor, he treated my mother with patience and as everyones here mentioned he is not keen on money and he will never suggest any tests until it’s really necessary to proceed with treatment.',
        name: 'Vani Kathir',
        avatar: 'https://pagedone.io/asset/uploads/1696230027.png'
    },
    {
        rating: 4.9,
        text: 'Hospital was well organised and everyone working in the hospital treats its patients with respect and dignity. Excellent service of doctors and staff. Doctors are humble and ready to resolve all doubts. Overall experience was very good. A very special thanks to dr. Vijay Anand sir and subash sir.',
        name: 'Fahima Shireen',
        avatar: 'https://pagedone.io/asset/uploads/1696230027.png'
    },
    {
        rating: 4.9,
        text: 'Doctors are so humble .Excellent service of doctors and staffs.Hospital was well organised and everyone working in the hospital treats patients with respect and dignity. Overall experience was very good.',
        name: 'Rathika Srm',
        avatar: 'https://pagedone.io/asset/uploads/1696230027.png'
    },
    {
        rating: 4.9,
        text: 'One of the best doctor in trichy I was consult Dr. Vijay anand for my wife he explained each everything thank you so much. Well maintanace hospital',
        name: 'Vijay kumar',
        avatar: 'https://pagedone.io/asset/uploads/1696230027.png'
    },
];

const Review = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleReadMore = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <section className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-rose-700">What our happy user says!</h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={32}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {Reviews.map((item, index) => {
                        const isExpanded = expanded === index;
                        const displayText = isExpanded ? item.text : item.text.slice(0, 150);

                        return (
                            <SwiperSlide key={index}>
                                <div className="group bg-white border border-gray-300 rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-500 hover:border-rose-300 hover:shadow-sm">
                                    <div>
                                        <div className="mb-4 flex items-center gap-2 text-amber-500">
                                            <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="text-base font-semibold text-indigo-600">{item.rating}</span>
                                        </div>

                                        <p className="text-base text-gray-600 leading-6 transition-all duration-500 group-hover:text-gray-800">
                                            {displayText}
                                            {item.text.length > 155 && (
                                                <button
                                                    onClick={() => toggleReadMore(index)}
                                                    className="ml-1 text-rose-600 underline text-sm"
                                                >
                                                    {isExpanded ? 'Read Less' : 'Read More'}
                                                </button>
                                            )}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center gap-5 border-t border-gray-200 pt-5">
                                        <img className="rounded-full h-10 w-10 object-cover" src={item.avatar} alt="avatar" />
                                        <div>
                                            <h5 className="text-gray-900 font-medium mb-1">{item.name}</h5>
                                            <span className="text-sm leading-4 text-gray-500">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;