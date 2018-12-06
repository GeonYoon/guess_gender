import axios from 'axios';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './types';

export const login = (username, password,history) => async dispatch => {
  try{
    const res = await axios.post('http://127.0.0.1:8000/api/auth/',{username, password})
    dispatch({type: LOGIN_SUCCESS, payload: res.data})
    history.push('/form');
  }
  catch (error){
     // console.log(Object.keys(error), error.message)
     dispatch({type: LOGIN_FAILURE})
  }
}
export const logout = () => async dispatch => {
  dispatch({type: LOGOUT})
}

export const register = (username,password,password2,email,history) => async dispatch =>{
  try{
    const compact ={username,password,password2,email}
    const res = await axios.post('http://127.0.0.1:8000/api/auth/register/',compact)
    dispatch({type: REGISTER_SUCCESS, payload: res.data})
    history.push('/form');
  }
  catch(error){
    // console.log(error)
    dispatch({type: REGISTER_FAILURE, payload : error})
  }
}

// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/current_user');
//
//     dispatch({type: FETCH_USER, payload: res.data});
// };
//
// export const handleToken = (token) => async dispatch => {
//     const res = await axios.post('/api/stripe',token);
//
//     //action type to update the user model inside of the authreducer
//     dispatch({type: FETCH_USER, payload: res.data});
// };
//
// export const changeInput = (value) => ({ type: CHANGE_INPUT,payload : value });
// export const insert = (text) => ({ type: INSERT, payload : text });
// export const toggle = (id) => ({ type: TOGGLE, payload : id });
// export const remove = (id) => ({ type: REMOVE,payload : id });
// export const updateColor = (value) => async dispatch => {
//     dispatch({ type : UPDATE_COLOR, payload : value});
// }
//
// export const submitTodo = (title,date, todos,completeness, history) => async dispatch => {
//     const compact = { title, date, todos, completeness}
//     await axios.post('/api/todos',compact)
//     history.push('/todo');
//     dispatch({ type: SUBMIT_TODO});
// };
//
// export const editTodo = (todos,completeness,history,id) => async dispatch => {
//     const compact = { todos, completeness}
//     await axios.put(`/api/todos/edit/${id}`,compact)
//     history.push('/todo');
//     dispatch({ type: SUBMIT_TODO});
// };
//
// export const fetchTodos = () => async dispatch => {
//     const res = await axios.get('/api/todos');
//
//     dispatch({type : FETCH_TODOS, payload : res.data });
// };
//
// export const deleteTodos = (id) => async dispatch => {
//     const res = await axios.delete(`/api/todos/delete/${id}`);
//     dispatch({type : DELETE_TODO, payload : res.data})
//
// };
//
// export const editFetch = (completeness,todos) => async dispatch => {
//     dispatch({type : EDIT_FETCH, payload : {completeness : completeness, todos : todos}})
// }
//
// export const resetTodo = () => async dispatch => {
//     dispatch({type : RESET_TODO})
// }
