import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6307c4173a2114bac76b391f.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts/',
      providesTags: ['Contacts'],
    }),

    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    addContact: build.mutation({
      query: body => ({
        url: '/contacts/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
