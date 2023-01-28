// Core
import React, {useState} from 'react';
// Engine
import {IUserRepo} from '../models/models';
import {useActions} from '../hooks/actions';
import {useAppSelector} from '../hooks/redux';

export function RepoCard({repo}: { repo: IUserRepo }) {

    const {addFavourite, removeFavourite} = useActions();
    const {favourites} = useAppSelector(state => state.github);

    const [isFavourite, setFavourite] = useState(favourites.includes(repo.html_url))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(repo.html_url);
        setFavourite(true);
    }
    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(repo.html_url);
        setFavourite(false);
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target={'_blank'}>
                <h2 className={'text-lg font-bold'}>{repo.full_name}</h2>
                <p className={'text-sm'}>
                    {repo?.description}
                </p>
                <p className={'text-sm'}>
                    Forks: <span className={'font-bold mr-12'}>{repo.forks}</span>
                    Watchers: <span className={'font-bold mr-12'}>{repo.watchers}</span>
                </p>
                <div className={'flex items-center gap-[20px] mt-5'}>
                    {!isFavourite &&
                        <button
                            className={'bg-green-400 rounded hover:shadow-md font-semibold hover:font-bold transition-all w-[150px] h-[60px]'}
                            onClick={addToFavourite}
                        >Add to favourites</button>
                    }
                    {isFavourite &&
                        <button
                            className={'bg-red-400 rounded hover:shadow-md font-semibold hover:font-bold transition-all text-[14px] w-[170px] h-[60px]'}
                            onClick={removeFromFavourite}
                        >Remove from favourites</button>
                    }
                </div>
            </a>
        </div>
    )
}