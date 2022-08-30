import { configureStore } from '@reduxjs/toolkit';
import filterValueReducer from './contactsSlice';
import { contactsApi } from 'services/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filterValue: filterValueReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
