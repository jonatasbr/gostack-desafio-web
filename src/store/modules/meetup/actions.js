import {
  MEETUP_LIST_MEETUP_REQUEST,
  MEETUP_LIST_MEETUP_SUCCESS,
  MEETUP_FAILURE,
} from '../actionsTypes';

export function listMeetupsRequest() {
  return {
    type: MEETUP_LIST_MEETUP_REQUEST,
  };
}

export function listMeetupsSuccess(meetups) {
  return {
    type: MEETUP_LIST_MEETUP_SUCCESS,
    payload: { meetups },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function createMeetupSuccess() {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(id, data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { id, data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}

export function requestDetailsMeetup(meetup) {
  return {
    type: '@meetup/REQUEST_DETAILS_MEETUP',
    payload: { meetup },
  };
}

export function cancelMeetupRequest(meetupId) {
  return {
    type: '@meetup/CANCEL_MEETUP',
    payload: { meetupId },
  };
}

export function meetupFailure() {
  return {
    type: MEETUP_FAILURE,
  };
}
