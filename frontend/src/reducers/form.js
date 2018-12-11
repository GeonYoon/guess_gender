import {
  FORM_SUCCESS
} from '../actions/types';
import { handleActions } from 'redux-actions';

const formInitialState = {
  nbcm_gender : null,
  mnbcm_gender : null,
  lcm_gender: null,
  most_common_gender : null
}

export default handleActions({
  [FORM_SUCCESS] : (state, action) => {
    return {
      nbcm_gender : action.payload.nbcm_gender,
      mnbcm_gender : action.payload.mnbcm_gender,
      lcm_gender: action.payload.lcm_gender,
      most_common_gender : action.payload.most_common_gender
    }
  }
}, formInitialState)
