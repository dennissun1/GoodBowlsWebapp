import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MyMap from './MyMap';
import MyFeed from './MyFeed';
import MyMakeOwnBowls from './MyMakeOwnBowls';
import MyNarbar from './MyNavbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <MyNarbar/>
                <Switch>
                    <Route exact path = '/' component={MyMap}/>
                    <Route exact path = '/feed' component={MyFeed}/>
                    <Route exact path = '/makeyourownbowls' component={MyMakeOwnBowls}/>
                </Switch>
            </div>
        );
    }
}

export default App;