import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

const iniState = [];

export const contactsReducer = createReducer(iniState, builder => {
  builder
    .addCase(actions.CONTACTS_ADDED, (state, action) => {
      state.push(action.payload);
    })
    .addCase(actions.CONTACTS_DELETED, (state, action) => {
      return state.filter(item => item.id !== action.payload);
    });
});
