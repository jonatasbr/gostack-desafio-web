import produce from 'immer';

import { MEETUP_LIST_MEETUP_SUCCESS, MEETUP_FAILURE } from '../actionsTypes';

const INITIAL_STATE = {
  meetup: null,
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case MEETUP_LIST_MEETUP_SUCCESS: {
        draft.meetups = action.payload.meetups;
        break;
      }
      case MEETUP_FAILURE: {
        break;
      }
      case '@meetup/CREATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@meetup/CREATE_MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@meetup/UPDATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      }
      case '@meetup/UPDATE_MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@meetup/REQUEST_DETAILS_MEETUP': {
        draft.meetup = action.payload.meetup;
        break;
      }
      default:
    }
  });
}
