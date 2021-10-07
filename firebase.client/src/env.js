import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'bcw-harrisonw.us.auth0.com'
export const clientId = 'VswNnhtKmw8npDG6i67MB2OTyc3HwpcJ'
export const audience = 'https://sandbox.com'

// FIREBASE LOGIC

// NOTE if firebase verison is > 9.0 we HAVE to use compat in the import paths

const firebaseConfig = {
  apiKey: 'AIzaSyCV6EuL4pck_mkVxCOpiRYoiSrOL5SmZu4',
  authDomain: 'storage-41977.firebaseapp.com',
  projectId: 'storage-41977',
  storageBucket: 'storage-41977.appspot.com',
  messagingSenderId: '1026212473205',
  appId: '1:1026212473205:web:f8a33cdd9cb12ad4098b3c',
  measurementId: 'G-CNTSNVF1C8'
}

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()
