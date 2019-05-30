import {combineReducers} from 'redux'

import saleReducer from './components/sale/reducer'

var reducer = combineReducers({
    sale:saleReducer
})

export default reducer