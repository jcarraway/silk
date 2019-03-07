import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createMigrate,
  PersistConfig,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSageMiddleware from 'redux-saga';
import { rootReducer } from './reducers';

const migrations = {
  0: (state: any) => state,
};

export function configureStore(key = 'root') {
  const persistConfig: PersistConfig = {
    key,
    migrate: createMigrate(migrations, { debug: __DEV__ }),
    storage,
    throttle: 500,
    version: 0,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const sagaMiddleware = createSageMiddleware();

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const persistor = persistStore(store);

  // sagaMiddleware.run(rootSaga)

  return { store, persistor };
}
