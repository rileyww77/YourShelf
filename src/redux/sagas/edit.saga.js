import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* fetchDetails(action){
    try {
        let response = yield axios.get(`/api/details/${action.payload}`);
        console.log(response.data);
        yield put ({ type: 'PUT_EDITS', payload: response.data})
    } catch (error) {
        console.log('error setting single project (index)', error)
    }
}

function* putUpdates(action){
    try{
        console.log(action.payload)
        let response= yield axios.put(`/api/details`, action.payload)
        console.log(response.data)
        
    } catch (error) {
        console.log('error setting updates in index', error)
    }
}

function* editSaga() {
  yield takeLatest('FETCH_EDITS', fetchDetails);
  yield takeEvery('PUT_UPDATES', putUpdates);
}

export default editSaga;