import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* fetchDetails(action){
    try {
        let response = yield axios.get(`/api/details/${action.payload}`);
        console.log(response.data);
        yield put ({ type: 'PUT_DETAILS', payload: response.data})
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

function* detailSaga() {
  yield takeLatest('FETCH_DETAILS', fetchDetails);
  yield takeEvery('PUT_UPDATES', putUpdates);
}

export default detailSaga;