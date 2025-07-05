import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../../assets/logo.png'; // Adjust path if needed
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const specialities = [
        { name: 'Medical Gastroenterology', path: '/specialities/Medical-Gastroenterology' },
        { name: 'Clinical Oncology', path: '/specialities/Clinical-Oncology' },
        { name: 'General Surgery', path: '/specialities/General-Surgery' },
        { name: 'Critical Care', path: '/specialities/Critical-Care' },
        { name: 'General Medicine', path: '/specialities/General-Medicine' },
        { name: 'Surgical Gastroenterology', path: '/specialities/Surgical-Gastroenterology' },
        { name: 'GI & HPB Oncology', path: '/specialities/GI&HPB-Oncology' },
        { name: 'Urology', path: '/specialities/urology' },
        { name: 'Orthopedics', path: '/specialities/Orthopedics' },
    ];

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Doctors', path: '/doctors' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'CSR', path: '/csr' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-rose-100 text-rose-900 pt-10 pb-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div>
                    <img src={Logo} alt="Logo" className="h-20 mb-3" />
                    <p className="text-sm leading-relaxed">
                        Your trusted medical partner offering specialized and compassionate care across all major departments.
                    </p>
                </div>

                {/* Quick Links - Specialities */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Specialities</h3>
                    <ul className="space-y-1">
                        {specialities.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.path} className="hover:text-rose-600">
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pages */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Pages</h3>
                    <ul className="space-y-1">
                        {pages.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.path} className="hover:text-rose-600">
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-1" />
                            <span>B20, 2nd Cross Rd, West Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a href="tel:+919999999999">+91 90471 46123</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:info@hospital.com">info@hospital.com</a>
                        </li>
                    </ul>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-blue-600"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-pink-600"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Your Hospital Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
