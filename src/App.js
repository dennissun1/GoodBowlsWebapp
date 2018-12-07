import React from 'react';
import MyMain from './MyMain';

class App extends React.Component {
    constructor(props) {
        super(props);
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });
    }
    render() {
        return (
            <div>
                <MyMain/>
            </div>
        );
    }
}

export default App;