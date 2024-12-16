import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      // DEV ONLY
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{type: 'Album', id: user.id}];
        },
        query: (user) => {
          return {
            url: `/albums`,
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            }
          }
        }
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          return [{type: 'Album', id: user.id}];
        },
        query: (user) => {
          return {
            url: `/albums`,
            params: {
              userId: user.id,
            },
            method: 'GET'
          }
        }
      })
    };
  }
});

// DEV ONLY
const pause = (duration) => new Promise(resolve => setTimeout(resolve, duration));

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} = albumsApi;
export {albumsApi};