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

//get just the projects the user has created
function* fetchUserProjects(action){
    try {
        let response = yield axios.get(`/api/projects/myProjects`);
        console.log(response.data);
        yield put ({ type: 'PUT_USER_PROJECTS', payload: response.data})
    } catch (error) {
        console.log('error setting user projects (index)', error)
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

//delete a project
function* deleteProject(action){
    try {
        let response = yield axios.delete(`/api/projects/${action.payload}`);
        console.log(response.data);
        yield put({type: 'FETCH_USER_PROJECTS', payload: action.payload })
    } catch (error) {
        console.log('error deleting single project (index)', error)
    }
}


function* projectSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('FETCH_USER_PROJECTS', fetchUserProjects);
    yield takeEvery('DELETE_PROJECT', deleteProject)
  }
  
  export default projectSaga;