import { createStore, combineReducers } from 'redux'

// import the config, jpb, department reducer:reducer update the  state data
// config
import configReducer from './reducer/config';
// jpbreducer
import jobReducer from './reducer/job';
// department reducer
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



const allReducer = 
// all reducer:reducer update the  state data
{
    config: configReducer,
    job: jobReducer,
    department: departmentReducer
}


// roor reducer include the all reducer:reducer update the  state data
const rootReducer = combineReducers(allReducer
)//comgine the reducer

const Store = createStore(rootReducer)

export default Store

