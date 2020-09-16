import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* putIcon(action) {
    try {
        console.log(action.payload)
        let response = yield axios.post(`/api/`, action.payload);
        console.log(response.data);
    } catch (error) {
        console.log('error setting single project (index)', error)
    }
}


function* iconSaga() {
  yield takeLatest('PUT_ICON', putIcon);
}

export default iconSaga;