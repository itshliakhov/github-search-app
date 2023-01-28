import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <nav className={'flex justify-between items-center h-[50px] px-5 shadow-md bg-cyan-700 text-white h-[100px]'}>
            <h3 className={'font-bold text-[40px]'}>Github Search</h3>


            <span>
                <Link to={'/'} className={'mr-8 font-bold'}>Home</Link>
                <Link to={'/favourites'} className={'font-bold'}>Favourites</Link>
            </span>
        </nav>
    )
}