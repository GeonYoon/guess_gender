import {
  FORM_SUCCESS
} from '../actions/types';
import { handleActions } from 'redux-actions';

const formInitialState = {
  whichGender: null
}

export default handleActions({
  [FORM_SUCCESS] : (state, action) => {
    return {
      whichGender : action.payload.gender
    }
  }
}, formInitialState)
