import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'meetups', payload.meetup);

    yield put(createMeetupSuccess());

    toast.success('Meetup criado com sucesso');
    history.push('/');
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados informados');

    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  const { id, data } = payload;

  try {
    const response = yield call(api.put, `meetups/${id}`, data);

    yield put(updateMeetupSuccess(response.data));

    toast.success('Meetup atualizado com sucesso');
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira os dados informados');

    yield put(updateMeetupFailure());
  }
}

export function requestDetailsMeetup({ payload }) {
  history.push(`/meetup/details/${payload.meetup.id}`);
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/REQUEST_DETAILS_MEETUP', requestDetailsMeetup),
]);
