import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addFavorite(action) {
    try {
        console.log(action.payload)
        let response = yield axios.post(`/api/favorites/addFavorite`, action.payload);
        console.log(response.data);
    } catch (error) {
        console.log('error setting single project (index)', error)
    }
}

function* fetchFavorites(action){
    try {
        console.log(action.payload)
        let response = yield axios.get(`/api/favorites`);
        console.log(response.data);
        yield put ({ type: 'PUT_FAVORITES', payload: response.data })
    } catch (error) {
        console.log('error setting single project (index)', error)
    }
}

//delete a favorite
function* deleteFavorite(action){
    try {
        let response = yield axios.delete(`/api/favorites/${action.payload}`);
        console.log(response.data);
        yield put({type: 'FETCH_FAVORITES' })
        fetchFavorites();
    } catch (error) {
        console.log('error deleting favorite (index)', error)
    }
}


function* favoriteSaga() {
  yield takeEvery('ADD_FAVORITE', addFavorite)
  yield takeEvery('FETCH_FAVORITES', fetchFavorites)
  yield takeEvery('DELETE_FAVORITE', deleteFavorite)
}

export default favoriteSaga;