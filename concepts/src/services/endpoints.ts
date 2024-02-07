// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints


const handleBaseQuery = () => {
    return fetchBaseQuery({ baseUrl: process.env.REACT_BASE_URL })
}

export const appEndpoints = createApi({
    reducerPath: 'appEndpoints',
    baseQuery: handleBaseQuery(),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<any, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = appEndpoints