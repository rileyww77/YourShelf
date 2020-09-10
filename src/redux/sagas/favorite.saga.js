import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addFavorite(action) {
    try {
        console.log(action.payload)
        let response = yield axios.post(`/api/favorites`, action.payload);
        console.log(response.data);
        
    } catch (error) {
        console.log('error setting single project (index)', error)
    }
}

function* favoriteSaga() {
  yield takeEvery('ADD_FAVORITE', addFavorite)
}

export default favoriteSaga;