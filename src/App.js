import React from 'react';
import MyMain from './MyMain';

class App extends React.Component {
    constructor(props) {
        super(props);
        document.addEventListener('touchmove', function (event) {
            if (event.scale !== 1) { event.preventDefault(); }
        }, false);
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