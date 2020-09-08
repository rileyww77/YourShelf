import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProjects(){
    try {
        let response = yield axios.get('/api/projects');
        console.log(response.data);
        yield put ({ type: 'PUT_PROJECTS', payload: response.data})
    } catch (error) {
        console.log('error setting project (index)', error)
    }
}


function* projectSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
  }
  
  export default projectSaga;