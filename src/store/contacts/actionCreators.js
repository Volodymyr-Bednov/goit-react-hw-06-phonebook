import { createAction } from '@reduxjs/toolkit';
import * as action from './actionTypes';

export const addContact = createAction(action.CONTACTS_ADDED);
export const deleteContact = createAction(action.CONTACTS_DELETED);
