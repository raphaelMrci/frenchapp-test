import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '@/Reducers/RootReducer'
import rootSaga from '@/Sagas/RootSaga'
import { LyricsState } from '@/Reducers/LyricsReducer'
import { AuthState } from '@/Reducers/AuthReducer'
import { NotificationsState } from '@/Reducers/NotificationsReducer'

const sagaMiddleware = createSagaMiddleware()

export interface StoreState {
    lyrics: LyricsState
    auth: AuthState
    notifications: NotificationsState
}

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore
