import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postImageUrl(action){
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

      const data = {
          imageUrl: action.payload
      }

      console.log('posting image url')
      const response = yield axios.post('/api/projects/image', data, config);
      console.log(response)
    } catch (error) {
        console.log('image url post failed', error)
    }
}


function* imageInfoSaga(){
    yield takeEvery ('POST_IMAGE_URL', postImageUrl)
}

export default imageInfoSaga;