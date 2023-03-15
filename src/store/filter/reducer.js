import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

const iniState = '';

export const filterReducer = createReducer(iniState, builder => {
  builder.addCase(actions.CONTACTS_FILTEREDED, (state, action) => {
    return action.payload;
  });
});
