import React, { useState } from 'react';

const videos = [
    { id: '1EIdX2ndS87J-993J8e2S_MnuvsCOa6GT', name: 'Customer 1' },
    { id: '1ELDpNd9_g2g1pMmGYq1TtYTeEIYkZqz9', name: 'Customer 2' },
    { id: '1T9NbIxNXjZeX6emu7dD3spE5qw3isQUG', name: 'Customer 3' },
    { id: '1Kd6R5xZi2dslE-TTgHJE2YBRATCVc1eU', name: 'Customer 4' },
    { id: '1ET9DbMoX6nsrWrfMLroxCDYy8kqP5w1A', name: 'Customer 5' },
    { id: '1zj5ye7mvYklW-59ATGY6cZ3JQY0VL3Ar', name: 'Customer 6' },
];

export default function TestimonialPage() {
    const [openId, setOpenId] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className="text-2xl md:text-4xl font-semibold text-rose-700 text-center mb-5">
                Testnimonials
            </h1>
            <h1 className="text-rose-400 text-center mb-4">
                Our Cases & Patient Stories
            </h1>
            <div className="grid grid-cols-1.5 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="bg-white shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        onClick={() => setOpenId(video.id)}
                    >
                        <iframe
                            src={`https://drive.google.com/file/d/${video.id}/preview`}
                            title={video.name}
                            className="w-full h-90 md:h-90 object-cover cursor-pointer"
                            allow="autoplay"
                        ></iframe>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {openId && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="relative w-[90%] max-w-4xl">
                        <button
                            onClick={() => setOpenId(null)}
                            className="absolute top-2 right-2 text-white text-xl bg-gray-700 px-3 py-1 rounded"
                        >
                            ✕
                        </button>
                        <iframe
                            src={`https://drive.google.com/file/d/${openId}/preview`}
                            className="w-full h-[60vh] rounded-lg"
                            allow="autoplay"
                            title="Testimonial Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
