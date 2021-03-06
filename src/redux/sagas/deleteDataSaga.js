import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteDataCustomer(action) {
  try {
    yield axios.delete(`/api/manage/delete/customer/${action.payload}`)
    yield put({type: 'FETCH_DATA'})
  } catch (error) {
      console.log('Error with delete customer:', error);
  }
}

function* deleteDataVehicle(action) {
  try {
    yield axios.delete(`/api/manage/delete/vehicle/${action.payload}`);
    yield put({type: 'FETCH_DATA'});
  } catch (error) {
      console.log('Error with delete vehicle:', error);
  }
}

function* deleteDataReceipt(action) {
  try {
    yield axios.delete(`/api/manage/delete/receipt/${action.payload}`);
    // yield put({type: 'FETCH_DATA_VEHICLE', payload: action.payload});
  } catch (error) {
      console.log('Error with delete receipt:', error);
  }
}

function* deleteDataSagaWatcher() { // listen to what to delete
  yield takeLatest('DELETE_CUSTOMER', deleteDataCustomer);
  yield takeLatest('DELETE_VEHICLE', deleteDataVehicle);
  yield takeLatest('DELETE_RECEIPT', deleteDataReceipt);
}

export default deleteDataSagaWatcher;
