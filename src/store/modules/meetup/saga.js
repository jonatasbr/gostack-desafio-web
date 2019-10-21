import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  updateMeetupSuccess,
  listMeetupsSuccess,
  meetupFailure,
} from './actions';
import {
  MEETUP_LIST_MEETUP_REQUEST,
  MEETUP_CREATE_MEETUP_REQUEST,
  MEETUP_UPDATE_MEETUP_REQUEST,
  MEETUP_CANCEL_MEETUP,
} from '../actionsTypes';

export function* listMeetups() {
  try {
    const response = yield call(api.get, 'events');

    const data = response.data.map(meetup => ({
      ...meetup,
      dateFormated: format(parseISO(meetup.date), "dd 'de' MMMM, 'às' HH'h'", {
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

    toast.success('Meetup criado com sucesso');

    history.push('/');
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados informados');

    yield put(meetupFailure());
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

    yield put(meetupFailure());
  }
}

export function requestDetailsMeetup({ payload }) {
  history.push(`/meetup/details/${payload.meetup.id}`);
}

export function* cancelMeetup({ payload }) {
  const { meetupId } = payload;

  yield call(api.delete, `meetups/${meetupId}`);

  toast.info('Meetup cancelado com sucesso');

  history.push('/');
}

export default all([
  takeLatest(MEETUP_LIST_MEETUP_REQUEST, listMeetups),
  takeLatest(MEETUP_CREATE_MEETUP_REQUEST, createMeetup),
  takeLatest(MEETUP_UPDATE_MEETUP_REQUEST, updateMeetup),
  takeLatest(MEETUP_CANCEL_MEETUP, cancelMeetup),
]);
