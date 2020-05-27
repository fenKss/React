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
                <Content state={props.state} store={props.store}/>
            </main>
        </div>
    );
};

export default App;
