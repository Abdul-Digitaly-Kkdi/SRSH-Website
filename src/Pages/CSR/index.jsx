import React from 'react';
import deltaImage from '../../assets/delta-cancer-foundation.jpg'; // Replace with your actual image path

const DeltaCancerFoundation = () => {
    return (
        <section className="w-full bg-gray-50 py-12 px-4 md:px-10 lg:px-20 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="w-full lg:w-6/12 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-rose-700 mb-4">
                        Delta Cancer Foundation
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We strive to be a beacon of hope for individuals battling cancer, particularly those from socially and economically underprivileged communities.
                    </p>
                    <p className="text-gray-600 mt-4 text-base leading-relaxed">
                        Guided by compassion and commitment, our mission is to ensure that no one fights cancer alone, regardless of their background or financial status.
                        Through awareness programs, early detection camps, palliative care support, and access to affordable treatment, we aim to bridge the gap in cancer care and bring healing closer to the communities that need it most.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-6/12">
                    <img
                        src={deltaImage}
                        alt="Delta Cancer Foundation"
                        className="w-full rounded-xl shadow-md object-cover "
                    />
                </div>
            </div>
        </section>
    );
};

export default DeltaCancerFoundation;
