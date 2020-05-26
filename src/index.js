import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/state';


export const rendererEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>,
        document.getElementById('root'),
    );
};


rendererEntireTree(store.getState());

store.subscribe(rendererEntireTree);

serviceWorker.unregister();


