import {combineReducers} from 'redux'
import medicamentReducer from './reducermedicament'
import questionReducer from './reducerquestion'
import doctorReducer from './reducerdoctor'
import reponseReducer from './reponseReducer'

export default combineReducers({medicamentReducer,questionReducer,doctorReducer,reponseReducer})


