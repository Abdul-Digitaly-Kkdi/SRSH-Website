import React from 'react';
import { AlertTriangle, Globe, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Time-Sensitive Care',
        subtitle: '(24/7 Emergency)',
        description: 'Elite emergency response, available 24/7. Moments matter. We act before time does.',
        icon: <AlertTriangle className="w-8 h-8 text-rose-600" />,
    },
    {
        title: 'Global Patient Concierge',
        subtitle: '(International Patients)',
        description: 'Healing beyond borders. From flight to recovery, care without borders.',
        icon: <Globe className="w-8 h-8 text-rose-600" />,
    },
    {
        title: 'Seamless Insurance-Integrated Care',
        subtitle: '(Insurance Coverage - Cashless)',
        description: 'Your care, fully covered with zero disruption. Where wellness meets effortless insurance access.',
        icon: <ShieldCheck className="w-8 h-8 text-rose-600" />,
    },
    {
        title: 'Precision-Care ICU',
        subtitle: '(ICU Care)',
        description: 'Every breath monitored. Every second mastered. Vital care, finely tuned to your recovery.',
        icon: <HeartPulse className="w-8 h-8 text-rose-600" />,
    },
];

const FeatureCards = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-rose-700 mb-12">
                    What Makes Us Different
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="group bg-white shadow-md hover:shadow-rose-200 rounded-xl p-6 border border-gray-300 hover:border-rose-400 transition-all duration-100 cursor-pointer"
                        >
                            <div className="flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-rose-700">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 text-center mb-2">
                                {feature.subtitle}
                            </p>
                            <p className="text-sm text-gray-600 text-center">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
