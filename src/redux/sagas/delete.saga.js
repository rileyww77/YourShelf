import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* deleteProject(action){
    try {
        let response = yield axios.delete(`/api/projects/${action.payload}`);
        console.log(response.data);
    } catch (error) {
        console.log('error deleting single project (index)', error)
    }
}

function* deleteSaga() {
  yield takeEvery('DELETE_PROJECT', deleteProject)
}

export default deleteSaga;