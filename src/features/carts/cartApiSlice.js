import { apiSlice } from "../../app/api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getcartOfCurrUser: builder.query({
      query: () => "/carts",
      keepUnusedDataFor: 5,
    }),
    addItemToCart: builder.mutation({
      query: (item) => ({
        url: "/carts",
        method: "POST",
        body: item,
      }),
    }),
    submitcartToOrder: builder.query({
      query: () => ({
        url: "/carts/submit",
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

export const {
  useGetcartOfCurrUserQuery,
  useAddItemToCartMutation,
  useSubmitcartToOrderQuery,
} = cartApiSlice;
