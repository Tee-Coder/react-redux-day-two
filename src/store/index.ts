import { combineReducers, createStore, applyMiddleware} from 'redux';
import { inventoryReducer } from './inventory/reducers';

//combine all the reducers together for a global app
const rootReducer = combineReducers({
    inventory: inventoryReducer
});

//typeof will grab the type that the 'combinedReducers' function returned
export type RootState = ReturnType <typeof rootReducer>;

//Here is our redux store! It knows about our actions and reducers
export default function configureStore()
{
    const store = createStore(rootReducer);
    return store;
}