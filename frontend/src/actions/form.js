import axios from 'axios';

import {
  FORM_SUCCESS
} from './types';

export const form = (about1, about2, history) => async dispatch => {
  const compact = {about1, about2}
  const res = await axios.post('http://127.0.0.1:8000/api/form/',compact)
  dispatch({type: FORM_SUCCESS, payload: res.data})
  history.push('/output')
}