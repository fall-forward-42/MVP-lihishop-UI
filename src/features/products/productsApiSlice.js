import { apiSlice } from "../../app/api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      keepUnusedDataFor: 5,
    }),
    createProducts: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
    getProductsByCate: builder.mutation({
      query: (cate) => ({
        url: "/products/search-by-category",
        method: "POST",
        body: cate,
      }),
    }),
  }),
});
export const {
  useCreateProductsMutation,
  useGetProductsQuery,
  useGetProductsByCateMutation,
} = productApiSlice;
