//function logger(obj, next, action)
//logger(obj, next, action)

import { AnyAction } from "redux";

const logger =  ({dispatch, getState}: any) => (next: any) => (action: AnyAction) => {
    if(typeof action !== 'function'){
        console.log('ACTION_TYPE = ', action.type);
    }

    next(action);
}

export default logger;