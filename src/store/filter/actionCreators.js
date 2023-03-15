import { createAction } from '@reduxjs/toolkit';
import * as action from './actionTypes';

export const filtContacts = createAction(action.CONTACTS_FILTEREDED);
