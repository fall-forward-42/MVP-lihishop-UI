import { apiSlice } from "../../app/api/apiSlice"

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/categories',
            keepUnusedDataFor: 5,
        }),
        createCategories: builder.mutation({
            query: category => ({
                url: '/categories',
                method: 'POST',
                body: category,
            }),
        }),
    })
})

export const {
    useGetCategoriesQuery,
    useCreateCategoriesMutation,
} = categoriesApiSlice