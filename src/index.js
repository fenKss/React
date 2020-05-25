import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import state, {addPost, changeTextPost, subscribe} from './redux/state';


export const rendererEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} changeTextPost={changeTextPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'),
    );
};


rendererEntireTree(state);
subscribe(rendererEntireTree);

serviceWorker.unregister();


