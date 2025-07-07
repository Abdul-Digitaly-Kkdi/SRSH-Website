import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, Factory, Menu, X } from 'lucide-react';
import Logo from "../../assets/logo.png";
import service from "../../assets/247.png";
import Marquee from 'react-fast-marquee';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const headerLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Doctors', path: '/doctors' },
        {
            name: 'Specialities',
            path: '/specialities',
            subMenu: [

                { name: 'GI & HBP Oncology', path: '/specialities/GI-&-HBP-Oncology' },
                { name: 'Surgical and Medical Oncology', path: '/specialities/Surgical-and-Medical-Oncology' },
                { name: 'Surgerical Gastroenterology', path: '/specialities/Surgerical-Gastroenterology' },
                { name: 'Medical Gastroenterology', path: '/specialities/Medical-Gastroenterology' },
                { name: 'General surgery', path: '/specialities/General-surgery' },
                { name: 'Orthopedics', path: '/specialities/Orthopedics' },
                { name: 'Urology', path: '/specialities/Urology' },
                { name: 'General Medicine', path: '/specialities/General-Medicine' },
                { name: 'Critical Care', path: '/specialities/Critical-Care' },
            ],
        },
        { name: 'Gallery', path: '/gallery' },
        { name: 'CSR', path: '/csr' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ];

    const marquee = [
        "Sri Ramakrishna Hospital – Emergency Care Available 24/7",
        "Book Appointments Online at www.sriramakrishnahospital.com",
        "Comprehensive Cancer Care Now at SRH",
        "Affordable Health Check-Up Packages Available",
        "24x7 Pharmacy and Ambulance Services – Call 0422-2477575",
    ]

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const nav = useNavigate();

    return (
        <header className="sticky top-0 z-50 shadow-md"
            style={{
                background: 'linear-gradient(90deg, hsla(339, 100%, 88%, 1) 0%, hsla(339, 65%, 44%, 1) 50%, hsla(339, 100%, 88%, 1) 100%)',
            }}>
            <div className="w-full xl:max-w-11/12 mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex flex-col cursor-pointer" onClick={() => (
                    nav('/')
                )}>
                    <img src={Logo} alt="Logo" className="h-12 lg:h-14 xl:h-16 w-auto" />
                    <p className='text-gray-800 hidden xl:flex ml-4 text-xs '>West Thillai Nagar, Tiruchirappalli</p>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {headerLinks.map((link) => (
                        <div
                            className="relative"
                            key={link.name}
                            ref={link.name === 'Specialities' ? dropdownRef : null}
                        >
                            {link.subMenu ? (
                                <button
                                    onClick={() => setDropdownOpen(prev => !prev)}
                                    className="flex items-center gap-1 text-white text-sm xl:text-base font-medium"
                                >
                                    {link.name}
                                    <ChevronDown
                                        className={`w-4 h-4 text-white transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    />

                                </button>
                            ) : (
                                <NavLink
                                    to={link.path}
                                    className="text-white font-medium text-sm xl:text-base"
                                >
                                    {link.name}
                                </NavLink>
                            )}

                            {/* Dropdown */}
                            {link.subMenu && dropdownOpen && (
                                <div className="absolute top-10 left-0 bg-white shadow-lg rounded mt-2 z-10 min-w-40">
                                    {link.subMenu.map((sub) => (
                                        <NavLink
                                            to={sub.path}
                                            key={sub.name}
                                            className="block px-4 py-2 text-sm text-rose-900 hover:bg-rose-100"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            {sub.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <a
                        href="tel:+919047146123"
                        className="bg-[#ff4e41] px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff4e41]"
                        aria-label="Call Emergency Number"
                    >
                        <img src={service} alt="Emergency Icon" className="h-6 xl:h-8" />
                        <div className="flex flex-col text-sm text-start text-white leading-tight">
                            <span className="font-semibold text-xs">Emergency</span>
                            <span className="font-semibold text-sm xl:text-base">9047146123</span>
                        </div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div >

            <div className='bg-white py-1'>
                <Marquee>
                    {marquee.map((data) => (
                        <p className='px-4 text-xs md:text-base'><span className='text-red-500 animate-bounce'>❤</span>  {data}</p>
                    ))}
                </Marquee>
            </div>

            {/* Mobile Nav */}
            {
                menuOpen && (
                    <div className="lg:hidden px-4 pb-4 space-y-2 bg-rose-50">
                        {headerLinks.map((link) => (
                            <div key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className="block py-2 text-rose-900 font-medium"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                                {link.subMenu && (
                                    <div className="pl-4 space-y-1">
                                        {link.subMenu.map((sub) => (
                                            <NavLink
                                                to={sub.path}
                                                key={sub.name}
                                                className="block py-1 text-sm text-rose-700"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {sub.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="bg-[#ff4e41] px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
                            <img src={service} alt="" className='h-6 xl:h-8' />
                            <div className='flex flex-col text-sm text-start text-white'>
                                <span className=' font-bold'>Emergency</span>
                                <span className=' font-semibold'>9047146123</span>
                            </div>
                        </button>
                    </div>
                )
            }
        </header >
    );
};

export default Header;
