import { apiSlice } from "../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 5,
        }),
        createUser: builder.mutation({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        deleteUser: builder.mutation({
            query: userId => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
        }),
        getSingleUser: builder.query({
            query: ()  => `/users/single`,
        }),
        
    })
})

export const {
    useGetUsersQuery,
    useCreateUserMutation,
    useDeleteUserMutation,
    useGetSingleUserQuery,
} = usersApiSlice