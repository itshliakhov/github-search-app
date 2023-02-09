import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <nav className={'flex xsm:flex-col md:flex-row  md:justify-between items-center h-[50px] px-5 shadow-md bg-cyan-700 text-white h-[120px]'}>
            <h3 className={'font-bold text-[40px]'}>Github Search</h3>


            <span className={'xsm:mt-[15px]>
                <Link to={'/'} className={'mr-8 font-bold'}>Home</Link>
                <Link to={'/favourites'} className={'font-bold'}>Favourites</Link>
            </span>
        </nav>
    )
}
