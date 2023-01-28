// Core
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// Engine
import {IUserRepo, ServerResponse} from '../../models/models';

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<ServerResponse['items'], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 15
                }
            }),
            transformResponse: (response: ServerResponse) => response.items
        }),
        getUserRepositories: build.query<IUserRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const {useSearchUsersQuery, useLazyGetUserRepositoriesQuery} = githubApi;