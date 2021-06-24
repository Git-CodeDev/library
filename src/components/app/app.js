import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {MainPage} from '../pages';

const App = () => {
    return (
        <div style={{div: `color(red)`}} className="app">
            <Switch>
                <Route
                    path="/"
                    component={MainPage}
                    exact/>
            </Switch>
        </div>
    )
}

export default App;
