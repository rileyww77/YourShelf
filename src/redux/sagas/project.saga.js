import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//getting all the projects to display
function* fetchProjects(){
    try {
        let response = yield axios.get('/api/projects');
        console.log(response.data);
        yield put ({ type: 'PUT_PROJECTS', payload: response.data})
    } catch (error) {
        console.log('error setting project (index)', error)
    }
}

//adding a new project
function* postProject(action){
    try {
        let response = yield axios.post('/api/projects', action.payload)
        console.log(response.data)
    } catch (error) {
        console.log('error posting project (index)', error)
    }
}


function* projectSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('POST_PROJECT', postProject);
  }
  
  export default projectSaga;