import { createStore, combineReducers } from 'redux'
import configReducer from './reducer/config';
import jobReducer from './reducer/job';
import departmentReducer from './reducer/department';

// state initail value
// const config = {
//     status: [
//         { label: "禁用", value: false },
//         { label: "启用", value: true }
//     ]
// }
// reducer to update the values(fucntion)
// const configReducer = function (state = config, action) {
//     return state;
// }
// action will call the function

// const Store = createStore(configReducer)

const allReducer = {
    config: configReducer,
    job: jobReducer,
    department: departmentReducer
}

const rootReducer = combineReducers(allReducer
)

const Store = createStore(rootReducer)

export default Store

