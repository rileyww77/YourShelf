import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDetails(action){
    try {
        let response = yield axios.get(`/api/details/${action.payload}`);
        console.log(response.data);
        yield put ({ type: 'PUT_DETAILS', payload: response.data})
    } catch (error) {
        console.log('error setting single project (index)', error)
    }
}

function* detailSaga() {
  yield takeLatest('FETCH_DETAILS', fetchDetails);
}

export default detailSaga;