import React from 'react'
import NotFoundImage from "../../assets/404.png"
import { FaArrowRight, } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const nav = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center mb-10'>
            <img src={NotFoundImage} alt='Not Found' className='w-100' />
            <p className='text-lg my-3'>Page Not Found 404!</p>
            <button className='flex items-center gap-3 border border-rose-300 rounded px-3 py-2 cursor-pointer'
                onClick={() => nav('/')}
            >
                Back to Home <FaArrowRight />
            </button>
        </div>
    )
}

export default NotFound
