import {combineReducers} from 'redux'
import dashboardReducer from './dashboard'
import tiketReducer from './tiket'

export default combineReducers({
    dashboard: dashboardReducer,
    tiket: tiketReducer,
})