import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='px-4 md:px-8'>
            <h1 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl text-red pb-8 md:pb-14'>
                Portfolio
            </h1>

            <div className='flex justify-center'>
                <a
                    href='https://github.com/Compadre2049'
                    className='text-center font-bold text-lg sm:text-xl text-green underline underline-offset-8 hover:text-red'
                >
                    Check out my GitHub
                </a>
            </div>

            <div className='flex justify-center mt-10'>
                <Link
                    to='/blogwhale/'
                    className='text-center font-bold text-lg sm:text-xl text-green underline underline-offset-8 hover:text-red'
                >
                    Visit The Blog Site I Built!
                </Link>
            </div>
        </div>
    )
}

export default Portfolio;