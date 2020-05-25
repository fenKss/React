import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import {changeTextPost} from './redux/state';

function App(props) {

    return (
            <div className="App">
                <Header/>
                <main>
                    <Sidebar/>
                    <Content content={props.state} addPost={props.addPost} changeTextPost={props.changeTextPost}/>
                </main>
            </div>
    );
}

export default App;
