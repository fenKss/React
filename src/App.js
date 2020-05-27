import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <Sidebar/>
                <Content />
            </main>
        </div>
    );
};

export default App;
