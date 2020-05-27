import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/reduxStore';
import  {Provider} from './StoreContext';

export const rendererEntireTree = () => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>,
        document.getElementById('root'),
    );
};


rendererEntireTree();

store.subscribe(() => {
    let state = store.getState();
    rendererEntireTree(state);
});

serviceWorker.unregister();


