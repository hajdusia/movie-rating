import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Main/>
                </div>
            </Provider>
        );
    }
}

export default App;
