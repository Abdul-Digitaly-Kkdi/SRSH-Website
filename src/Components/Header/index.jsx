import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const headerLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Doctors', path: '/doctors' },
        {
            name: 'Specialities',
            path: '/specialities',
            subMenu: [
                { name: 'Cardiology', path: '/specialities/cardiology' },
                { name: 'Neurology', path: '/specialities/neurology' },
                { name: 'Orthopaedics', path: '/specialities/orthopaedics' },
                { name: 'Pediatrics', path: '/specialities/pediatrics' },
                { name: 'Dermatology', path: '/specialities/dermatology' },
                { name: 'ENT', path: '/specialities/ent' },
                { name: 'Ophthalmology', path: '/specialities/ophthalmology' },
                { name: 'Urology', path: '/specialities/urology' },
                { name: 'Psychiatry', path: '/specialities/psychiatry' },
            ],
        },
        { name: 'Gallery', path: '/gallery' },
        { name: 'CSR', path: '/csr' },
        { name: 'Blogs', path: '/blogs' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-rose-100 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {headerLinks.map((link) => (
                        <div className="relative group" key={link.name}>
                            <NavLink
                                to={link.path}
                                className="text-rose-900 font-medium hover:text-rose-600"
                            >
                                {link.name}
                            </NavLink>

                            {link.subMenu && (
                                <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 hidden group-hover:block z-10">
                                    {link.subMenu.map((sub) => (
                                        <NavLink
                                            to={sub.path}
                                            key={sub.name}
                                            className="block px-4 py-2 text-sm text-rose-900 hover:bg-rose-100"
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
                <div className="hidden md:block">
                    <button className="bg-rose-600 text-white px-5 py-2 rounded-full hover:bg-rose-700">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-rose-50">
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
                    <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-full">
                        Book Now
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header