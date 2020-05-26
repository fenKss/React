import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <main>
                <Sidebar/>
                <Content content={props.state} dispatch={props.dispatch}/>
            </main>
        </div>
    );
};

export default App;
