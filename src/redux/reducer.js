import {combineReducers} from 'redux';
import UserReducer from './user/reducer';

export const reducer = combineReducers({
    user: UserReducer
});
