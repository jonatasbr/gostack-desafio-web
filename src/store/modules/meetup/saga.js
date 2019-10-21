import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  listMeetupsSuccess,
  meetupFailure,
} from './actions';
import { MEETUP_LIST_MEETUP_REQUEST } from '../actionsTypes';

export function* listMeetups() {
  try {
    const response = yield call(api.get, 'events');

    const data = response.data.map(meetup => ({
      ...meetup,
      dateFormatted: format(parseISO(meetup.date), "dd 'de' MMMM, 'às' HH'h'", {
        locale: pt,
      }),
    }));

    yield put(listMeetupsSuccess(data));
  } catch (err) {
    toast.error('Erro ao carregar seus meetups');
    yield put(meetupFailure());
  }
}

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
    history.push('/');
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira os dados informados');

    yield put(updateMeetupFailure());
  }
}

export function requestDetailsMeetup({ payload }) {
  history.push(`/meetup/details/${payload.meetup.id}`);
}

export function* cancelMeetup({ payload }) {
  console.tron.log(payload);
  const { meetupId } = payload;

  yield call(api.delete, `meetups/${meetupId}`);

  toast.info('MeetUp Cancelado com Sucesso');

  history.push('/');
}

export default all([
  takeLatest(MEETUP_LIST_MEETUP_REQUEST, listMeetups),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/REQUEST_DETAILS_MEETUP', requestDetailsMeetup),
  takeLatest('@meetup/CANCEL_MEETUP', cancelMeetup),
]);
