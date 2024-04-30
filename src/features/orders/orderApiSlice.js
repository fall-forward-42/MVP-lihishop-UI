import { apiSlice } from "../../app/api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrderByCurrUser: builder.query({
      query: () => "/orders",
      keepUnusedDataFor: 5,
    }),
    getDetailsOrderByOrderId: builder.query({
      query: (orderId) => `/orders/${orderId}`,
      keepUnusedDataFor: 5,
    }),

  }),
});

export const {
  useGetOrderByCurrUserQuery,
  useGetDetailsOrderByOrderIdQuery
} = orderApiSlice;
