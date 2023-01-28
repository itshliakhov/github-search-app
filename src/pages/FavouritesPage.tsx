import React from 'react';
import {useAppSelector} from '../hooks/redux';

export function FavouritesPage() {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className={'text-center'}>You don't have favourite repositories...</p>
    return (
        <ul className={'list-none container mx-auto text-center font-bold'}>
            {
                favourites.map((f, index) => {
                    return (
                        <li key={f} className={'pt-[30px] transition-colors'}>
                            <a href={f} className={'hover:text-sky-500'} target={'_blank'}>{index + 1}⭐: {f}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}