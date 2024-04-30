import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        let token = null
        if(getState()!==null){
             token = getState().auth.token
        }
        if(localStorage.getItem('token')){
             token = localStorage.getItem('token')
        }
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    
    let result = await baseQuery(args, api, extraOptions)
    if(result.data.message === "Login successfully"){
        console.log("save new login")
        const user = api.getState().auth.user
            // store the new token 
        api.dispatch(setCredentials({ ...result.data,user }))
    }
    if (result?.error?.status === 403) {
        console.log('sending refresh token')
        const refreshResult = await baseQuery(args, api, extraOptions)
         console.log("refreshResult",refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data,user }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})