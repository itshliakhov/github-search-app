// Core
import React, {useEffect, useState} from 'react';
// Engine
import {useLazyGetUserRepositoriesQuery, useSearchUsersQuery} from '../engine/github/github.api';
// Hook
import {useDebounce} from '../hooks/debounce';
// Parts
import {RepoCard} from '../components/RepoCard';

export function HomePage() {
    const [search, setSearch] = useState('')
    const [dropdown, setDropDown] = useState(true);
    const debounced = useDebounce(search);
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    });

    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserRepositoriesQuery()

    useEffect(() => {
        setDropDown(debounced.length > 3 && data?.length! > 0)
    }, [debounced])

    const clickHandler = (username: string) => {
        fetchRepos(username);
        setDropDown(false);
    }

    return (
        <div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>

            <div className={'relative w-[560px]'}>
                <input
                    type="text"
                    className={'border py-2 px-4 w-full h-[42px] mb-2'}
                    placeholder={'Search for Github username...'}
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
                {isError && <p className={'text-center text-red-600'}>Something went wrong...</p>}

                {dropdown &&
                    <ul className={'list-none absolute top-[42px] left-0 right-0 max-h-[250px] overflow-y-scroll shadow-md bg-white gap-10 flex flex-col mt-5'}>
                        {isLoading && <p className={'text-center'}>Response is loading..</p>}
                        {data?.map(user => (
                            <li key={user.id}
                                onClick={() => clickHandler(user.login)}
                                className={'flex items-center cursor-pointer max-w-[250px] ml-10 hover:bg-gray-500 hover:text-white text-black rounded-[25px] transition-colors'}>
                                <img src={user.avatar_url} alt="image" className={'w-[50px] rounded-full'}/>
                                <p className={'ml-5 font-bold text-[18px]'}>{user.login}</p>
                            </li>
                        ))}
                    </ul>
                }
                <div className="container">
                    {areReposLoading && <p className={'text-center mt-[70px]'}>Repositories are loading...</p>}
                    {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
                </div>
            </div>

        </div>
    )
}
