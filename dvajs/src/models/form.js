import { message } from 'antd'
import { fakeSubmitForm } from '../services/api'

export default {
  namespace: 'form',

  state: {
    regularFormSubmitting: false,
  },

  effects: {
    *submitRegualrForm({ payload }, { call, put }) {
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: true,
      })
      yield call(fakeSubmitForm, payload)
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: false,
      })
      message.success('提交成功')
    }
  },

  reducers: {
    changeRegularFormSubmitting(state, { payload }) {
      return {
        ...state,
        regularFormSubmitting: payload,
      }
    }
  }
}
