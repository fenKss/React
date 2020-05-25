import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addPost,changeTextPost} from './redux/state';

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

