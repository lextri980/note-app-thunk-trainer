export const url =
	process.env.NODE_ENV !== 'production'
		// ? 'https://note-me-app.herokuapp.com'
		? 'http://localhost:5000'
		: 'someurl'
		// : 'https://note-me-app.herokuapp.com/'

//LocalStorage
export const LOCALSTORAGE_TOKEN_NAME = 'authentication'

// AuthConst
export const SETTING_AUTH = 'SETTING_AUTH'
export const SET_AUTH_LOGIN_SUCCESS = 'SET_AUTH_LOGIN_SUCCESS'
export const SET_AUTH_REGISTER_SUCCESS = 'SET_AUTH_REGISTER_SUCCESS'
export const SET_AUTH_FAIL = 'SET_AUTH_FAIL'

//NoteConst
export const GETTING_NOTE = 'GETTING_NOTE'
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS'
export const GET_NOTE_FAIL = 'GET_NOTE_FAIL'
export const CREATE_NOTE = 'CREATE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'