import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <main>
                <Sidebar/>
                <Content/>
            </main>
        </div>
        </BrowserRouter>
    );
}

export default App;
