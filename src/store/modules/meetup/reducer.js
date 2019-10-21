import produce from 'immer';

import {
  MEETUP_LIST_MEETUP_SUCCESS,
  MEETUP_FAILURE,
  MEETUP_CREATE_MEETUP_REQUEST,
  MEETUP_CREATE_MEETUP_SUCCESS,
  MEETUP_UPDATE_MEETUP_REQUEST,
  MEETUP_UPDATE_MEETUP_SUCCESS,
} from '../actionsTypes';

const INITIAL_STATE = {
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case MEETUP_LIST_MEETUP_SUCCESS: {
        draft.meetups = action.payload.meetups;
        break;
      }
      case MEETUP_CREATE_MEETUP_REQUEST: {
        break;
      }
      case MEETUP_CREATE_MEETUP_SUCCESS: {
        draft.meetups.push(action.payload.meetup);
        break;
      }
      case MEETUP_UPDATE_MEETUP_REQUEST: {
        break;
      }
      case MEETUP_UPDATE_MEETUP_SUCCESS: {
        const id = draft.meetups.findIndex(
          meet => meet.id === action.payload.meetup.id
        );
        draft.meetups[id] = action.payload.meetup;
        break;
      }
      case MEETUP_FAILURE: {
        break;
      }
      default:
    }
  });
}
